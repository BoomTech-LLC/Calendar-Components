import momenttimezone from "moment-timezone";
import { TIMEZONE_LIST } from "./constants";

export const getDateForDateBox = (start, end, locale, monthNameType) => {
  const [startDate] = start.split("T");
  const [endDate] = end.split("T");
  const currentDate = momenttimezone().format("YYYY-MM-DD");
  const isUpcoming =
    momenttimezone(startDate).isSameOrBefore(currentDate) &&
    momenttimezone(endDate).isSameOrAfter(currentDate);

  const dateToShow = isUpcoming ? undefined : startDate;
  const isShort = monthNameType === "short";

  return {
    day: momenttimezone(dateToShow).locale(locale).format("DD"),
    week: momenttimezone(dateToShow).locale(locale).format("dddd"),
    month: momenttimezone(dateToShow)
      .locale(locale)
      .format(isShort ? "MMM" : "MMMM"),
  };
};

const getFormattedDate = (date, dateFormat, locale, showYearAnyway) => {
  let format = dateFormat;

  if (
    dateFormat.includes("YYYY") &&
    !showYearAnyway &&
    momenttimezone(date).format("YYYY") === momenttimezone().format("YYYY")
  ) {
    const yearRegex = new RegExp(",? ?,?YYYY,? ?,?");
    format = dateFormat.split(yearRegex)[1]
      ? dateFormat.replace(/,? ?,?YYYY/, "").trim()
      : dateFormat.replace(yearRegex, "").trim();
  }

  return momenttimezone(date).locale(locale).format(format);
};

export const formatDate = (start, end, dateFormat, locale) => {
  const startDate = start.replace("T", " ");
  const endDate = end.replace("T", " ");
  const showYearAnyway =
    dateFormat.includes("YYYY") && !isDatesInCurrentYear(startDate, endDate);

  return {
    startDate: getFormattedDate(startDate, dateFormat, locale, showYearAnyway),
    endDate: getFormattedDate(endDate, dateFormat, locale, showYearAnyway),
  };
};

export const formatTime = (start, end, timeFormat, all_day, locale) => {
  const format = timeFormat.toLowerCase() === "am/pm" ? " hh:mm a" : " HH:mm";
  return {
    startTime: all_day
      ? ""
      : momenttimezone(start.replace("T", " ")).locale(locale).format(format),
    endTime: all_day
      ? ""
      : momenttimezone(end.replace("T", " ")).locale(locale).format(format),
  };
};

export const isDatesInCurrentYear = (start, end) => {
  const currentYear = momenttimezone().format("YYYY");
  const dates = [
    momenttimezone(start.replace("T", " ")).format("YYYY"),
    momenttimezone(end.replace("T", " ")).format("YYYY"),
  ];

  return dates.every((date) => date === currentYear);
};

export const findAppropriateTimezone = (timeZone) => {
  const selectedTimezoneId = TIMEZONE_LIST.find(
    (tz) => tz.offset === timeZone || tz.tzName === timeZone
  );

  if (selectedTimezoneId) return selectedTimezoneId.tzName;

  const currentOffsetMinutes = momenttimezone.tz(timeZone).utcOffset();
  const offsetHours = Math.floor(Math.abs(currentOffsetMinutes) / 60);
  const gmtOffsetString = `GMT${
    currentOffsetMinutes >= 0 ? "+" : "-"
  }${offsetHours}`;

  return (
    TIMEZONE_LIST.find((tz) => tz.offset === gmtOffsetString)?.tzName ||
    timeZone
  );
};

export const isRegistrationClosed = (
  timeZone,
  eventStartDate,
  convertDate,
  allDay
) => {
  let toggle = false;

  const eventTimezone = timeZone || momenttimezone.tz.guess();

  if (allDay) {
    if (
      momenttimezone()
        .tz(findAppropriateTimezone(eventTimezone))
        .format("YYYY-MM-DD") >=
      momenttimezone(eventStartDate)
        .tz(findAppropriateTimezone(eventTimezone))
        .format("YYYY-MM-DD")
    ) {
      toggle = true;
    }
  } else {
    if (convertDate) {
      if (momenttimezone().format("YYYY-MM-DDTHH:mm") >= eventStartDate) {
        toggle = true;
      }
    } else {
      if (
        momenttimezone()
          .tz(findAppropriateTimezone(eventTimezone))
          .format("YYYY-MM-DDTHH:mm") >= eventStartDate
      ) {
        toggle = true;
      }
    }
  }

  return toggle;
};

export const formatEventDateByTimeZone = ({
  start,
  end,
  allDay,
  timeZone,
  convertDate,
}) => {
  let _start = start;
  let _end = end;
  const format = allDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm";
  let currentTimezone = timeZone;

  if (currentTimezone.includes("GMT")) {
    currentTimezone = findAppropriateTimezone(currentTimezone);
  }

  if (currentTimezone && !allDay && convertDate) {
    _start = momenttimezone
      .tz(_start, currentTimezone)
      .clone()
      .tz(momenttimezone.tz.guess())
      .format(format);
    _end = momenttimezone
      .tz(_end, currentTimezone)
      .clone()
      .tz(momenttimezone.tz.guess())
      .format(format);
  }

  if (!convertDate) {
    _start = momenttimezone(_start).format(format);
    _end = momenttimezone(_end).format(format);
  }

  return { start: _start, end: _end };
};
