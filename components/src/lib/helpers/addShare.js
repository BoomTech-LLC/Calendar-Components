import { encodeId } from "../helpers/commons";
import momenttimezone from "moment-timezone";

// ──── ICS generation (RFC 5545) ────

const CRLF = "\r\n";

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const escapeIcsText = (text) => {
  if (!text) return "";
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r\n|\r|\n/g, "\\n");
};

const foldIcsLine = (line) => {
  if (line.length <= 75) return line;
  const parts = [line.substring(0, 75)];
  let pos = 75;
  while (pos < line.length) {
    parts.push(" " + line.substring(pos, pos + 74));
    pos += 74;
  }
  return parts.join(CRLF);
};

const sanitizeFilename = (name) => {
  if (!name) return "event";
  return name.replace(/[^a-zA-Z0-9 _-]/g, "").trim() || "event";
};

const buildPlainTextDescription = (event) => {
  const parts = [];

  if (event.desc) {
    const cleaned = event.desc
      .replace(/&lt/g, "<")
      .replace(/&gt/g, ">")
      .replace(/&nbsp/g, " ")
      .replace(/&amp/g, "&");
    const text = stripHtml(cleaned).trim();
    if (text) parts.push(text);
  }

  const venue = event.venue || {};
  const venueFields = [venue.name, venue.phone, venue.email, venue.website].filter(Boolean);
  if (venueFields.length) {
    parts.push("", "Venue Details:");
    parts.push(...venueFields);
  }

  const org = event.organizer || {};
  const orgFields = [org.name, org.phone, org.email, org.website].filter(Boolean);
  if (orgFields.length) {
    parts.push("", "Organizer:");
    parts.push(...orgFields);
  }

  return parts.join("\n");
};

export function downloadSharer(e, type, event, instance) {
  e.stopPropagation();

  if (!event || !event.start) return;

  const allDay = !!event.all_day;

  // ── Timezone ─────────────────────────────────────────────
  // iCloud sync cannot store truly floating times — it always assigns
  // a timezone (defaulting to UTC), which shifts the displayed time.
  // To prevent this we anchor every datetime to the browser's IANA
  // timezone via TZID + a VTIMEZONE block.  Because the times are
  // already what the user sees on screen, anchoring to the browser
  // timezone keeps the display identical after import.
  const browserTz =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const offsetMin = momenttimezone.tz(browserTz).utcOffset();
  const formatOffset = (min) => {
    const sign = min >= 0 ? "+" : "-";
    const a = Math.abs(min);
    const h = String(Math.floor(a / 60)).padStart(2, "0");
    const m = String(a % 60).padStart(2, "0");
    return `${sign}${h}${m}`;
  };
  const icsOffset = formatOffset(offsetMin);

  // ── Date properties ──────────────────────────────────────
  // Pure string manipulation — no moment parsing — so the stored
  // values are never shifted by the browser's Date implementation.
  let dtStartLine, dtEndLine;

  if (allDay) {
    const dtStart = event.start.replace(/-/g, "");
    // The upstream getOrigEndDate converts the exclusive DB end-date to an
    // inclusive display date. ICS VALUE=DATE DTEND is exclusive, so add 1 day.
    const endDate = event.end || event.start;
    const dtEnd = momenttimezone.utc(endDate).add(1, "day").format("YYYYMMDD");

    dtStartLine = `DTSTART;VALUE=DATE:${dtStart}`;
    dtEndLine = `DTEND;VALUE=DATE:${dtEnd}`;
  } else {
    const toIcsDateTime = (str) => {
      const clean = str.replace(/[-:]/g, "");
      return clean.includes("T") && clean.split("T")[1].length === 4
        ? clean + "00"
        : clean;
    };

    dtStartLine = `DTSTART;TZID=${browserTz}:${toIcsDateTime(event.start)}`;
    dtEndLine = `DTEND;TZID=${browserTz}:${toIcsDateTime(event.end || event.start)}`;
  }

  // ── Text fields ──────────────────────────────────────────
  const summary = escapeIcsText(event.title || "Untitled Event");
  const description = escapeIcsText(buildPlainTextDescription(event));
  const location = escapeIcsText((event.venue && event.venue.address) || "");

  // Deterministic UID: same event + occurrence + calendar yields same UID.
  const startKey = (event.start || "").replace(/[^a-zA-Z0-9]/g, "");
  const uid = `boom-${event.id || "0"}-${startKey}-${instance}@boomcalendar.com`;
  const dtstamp = momenttimezone.utc().format("YYYYMMDD[T]HHmmss[Z]");

  // ── Assemble VCALENDAR ───────────────────────────────────
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//BoomCalendar//BoomCalendar//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VTIMEZONE",
    `TZID:${browserTz}`,
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    `TZOFFSETFROM:${icsOffset}`,
    `TZOFFSETTO:${icsOffset}`,
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    dtStartLine,
    dtEndLine,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  // Fold every line, join with CRLF, and add a trailing CRLF.
  const icsContent = lines.map(foldIcsLine).join(CRLF) + CRLF;

  // ── Trigger download ─────────────────────────────────────
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const blobUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = blobUrl;
  anchor.download = sanitizeFilename(event.title) + ".ics";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(blobUrl);
}

export function openAddToUrl(e, type, event) {
  e.stopPropagation();
  let eventDescription = "";
  let url;
  switch (type) {
    case "google":
      eventDescription = event.desc ? createDesc(event, "google") : "";

      if (event.all_day)
        url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          event.title
        )}
        &dates=${momenttimezone(
          formatForAddtoCalendar(event, "start", type)
        ).format("YYYYMMDD")}/${momenttimezone(
          formatForAddtoCalendar(event, "end")
        ).format("YYYYMMDD")}&details=${
          event.desc ? eventDescription : ""
        }&location=${setLocation(event, "encode")}`;
      else
        url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          event.title
        )}
        &dates=${momenttimezone(
          formatForAddtoCalendar(event, "start", type)
        ).format("YYYYMMDD[T]HHmmss")}/${momenttimezone(
          formatForAddtoCalendar(event, "end")
        ).format("YYYYMMDD[T]HHmmss")}&details=${
          event.desc ? eventDescription : ""
        }&location=${setLocation(event, "encode")}`;
      break;
    case "yahoo":
      eventDescription = event.desc ? createDesc(event, "yahoo") : "";
      if (event.all_day)
        url =
          "https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=" +
          (event.all_day ? "all_day" : "") +
          "&TITLE=" +
          encodeURIComponent(event.title) +
          "&ST=" +
          momenttimezone(formatForAddtoCalendar(event, "start", type)).format(
            "YYYYMMDD"
          ) +
          "&ET=" +
          momenttimezone(formatForAddtoCalendar(event, "end", "yahoo")).format(
            "YYYYMMDD"
          ) +
          "&DESC=" +
          eventDescription +
          "&in_loc=" +
          setLocation(event);
      else
        url =
          "https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=" +
          encodeURIComponent(event.title) +
          "&ST=" +
          momenttimezone(formatForAddtoCalendar(event, "start", type)).format(
            "YYYYMMDD[T]HHmmss"
          ) +
          "&ET=" +
          momenttimezone(formatForAddtoCalendar(event, "end")).format(
            "YYYYMMDD[T]HHmmss"
          ) +
          "&DESC=" +
          eventDescription +
          "&in_loc=" +
          setLocation(event);
      break;
    default:
      console.error("undefined calendar type");
  }
  window.open(url, "_blank");
  return;
}

function formatForAddtoCalendar(event, key, type) {
  let fullStart, fullEnd;
  if (event.all_day) {
    fullStart = momenttimezone(event.start).format("YYYY-MM-DD");
    if (event.end !== event.start) {
      fullEnd = momenttimezone(event.end).add(1, "days").format("YYYY-MM-DD");
    } else {
      fullEnd = momenttimezone(event.end).format("YYYY-MM-DD");
      if (type !== "yahoo")
        fullEnd = momenttimezone(event.end).add(1, "days").format("YYYY-MM-DD");
    }
  } else {
    fullStart = momenttimezone(event.start).format("YYYY-MM-DDTHH:mm:ss");
    fullEnd = momenttimezone(event.end).format("YYYY-MM-DDTHH:mm:ss");
  }
  if (type === "yahoo" && event.end !== event.start)
    fullEnd = momenttimezone(fullEnd)
      .subtract(1, "day")
      .format("YYYY-MM-DDTHH:mm:ss");

  return key === "start" ? fullStart : fullEnd;
}

export function setLocation(event, key) {
  if (event.location) {
    if (key === "encode") return encodeURIComponent(event.location);
    else return event.location;
  }

  let venue = event.venue;
  if (venue && venue.address) {
    const subDataToProcess = [
      venue.address,
      venue.city,
      venue.statesList,
      venue.postal,
      venue.country,
    ];
    return arrStringify(subDataToProcess, "+");
  }

  return "";
}

const arrStringify = (arr, separator = "") => {
  return arr
    .filter((v) => !!v)
    .map((v) => encodeURIComponent(v))
    .join(separator);
};

const plainTextFromHTML = (htmlStr) => {
  let div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.textContent || div.innerText || "";
};

const createDesc = (event, type) => {
  return `${
    event.desc
      ? `${encodeURIComponent(
          type === "yahoo" ? plainTextFromHTML(event.desc) : event.desc
        )}`
      : ""
  }
    ${
      Object.values(event.organizer)?.length > 0
        ? "%0D%0A%0D%0AVenue Details:%0D%0A"
        : ""
    }
    ${event.venue.name ? `${encodeURIComponent(event.venue.name)}%0D%0A` : ""}
    ${event.venue.phone ? `${encodeURIComponent(event.venue.phone)}%0D%0A` : ""}
    ${event.venue.email ? `${encodeURIComponent(event.venue.email)}%0D%0A` : ""}
    ${
      event.venue.website
        ? `${encodeURIComponent(event.venue.website)}%0D%0A%0D%0A`
        : ""
    }
    ${
      Object.values(event.organizer)?.length > 0
        ? "%0D%0A%0D%0AOrganizer Details:%0D%0A"
        : ""
    }
    ${
      event.organizer.name
        ? `${encodeURIComponent(event.organizer.name)}%0D%0A`
        : ""
    }
    ${
      event.organizer.phone
        ? `${encodeURIComponent(event.organizer.phone)}%0D%0A`
        : ""
    }
    ${
      event.organizer.email
        ? `${encodeURIComponent(event.organizer.email)}%0D%0A`
        : ""
    }
    ${
      event.organizer.website
        ? `${encodeURIComponent(event.organizer.website)}`
        : ""
    }`;
};

export function openShareUrl(e, type, eventUrl) {
  e.stopPropagation();
  let base,
    isFb = type === "facebook";
  switch (type) {
    case "facebook":
      base = "https://facebook.com/sharer/sharer.php?u=";
      break;
    case "linkedin":
      base = "https://www.linkedin.com/sharing/share-offsite/?url=";
      break;
    case "twitter":
      base = "http://twitter.com/share?url=";
      break;
    default:
      console.error("undefined share url type");
  }
  window.open(
    base + eventUrl,
    !isFb && "_blank",
    isFb && "resizable,width=500,height=400"
  );
  return;
}

export function generateEventUrl(
  event,
  boomEventUrlBase,
  addDateInUrl,
  dateParams,
  isCopyLink
) {
  if (event.kind === 4) return event.eventPageUrl || "";

  const url = `${boomEventUrlBase}${encodeId(`${event.id}`)}${
    addDateInUrl ? `?date=${dateParams.join(",")}` : ""
  }`;

  return isCopyLink ? url : encodeURIComponent(url);
}

export function copyLink(e, setCopyTooltipText, copiedTooltipText, eventUrl) {
  e.stopPropagation();
  let a = document.createElement("textarea");
  a.innerText = eventUrl;
  document.body.appendChild(a);
  a.setSelectionRange(0, 99999);
  a.select();
  document.execCommand("copy");
  a.remove();
  setCopyTooltipText(copiedTooltipText);
}

export function checkProps(props) {
  if (!props.comp_id)
    return console.error(
      "component is not rendered as comp_id was missing in props or a falsy value is assigned to it"
    );
  if (!props.instance)
    return console.error(
      "component is not rendered as instance was missing in props or a falsy value is assigned to it"
    );
  if (!props.event || !props.event.hasOwnProperty("id"))
    return console.error(
      "component is not rendered as event object was missing in props or doesn't match to event object skeleton"
    );
  if (!props.boomEventUrlBase)
    return console.error(
      "component is not rendered as boomEventUrlBase was missing in props or a falsy value is assigned to it"
    );
  return true;
}
