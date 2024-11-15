"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkProps = checkProps;
exports.copyLink = copyLink;
exports.downloadSharer = downloadSharer;
exports.generateEventUrl = generateEventUrl;
exports.openAddToUrl = openAddToUrl;
exports.openShareUrl = openShareUrl;
exports.setLocation = setLocation;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _commons = require("../helpers/commons");
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const formatEventDateForIcs = (date, all_day) => {
  const res = all_day ? date : date + "00";
  return res.replace(/[-,:]/g, "");
};
function downloadSharer(e, type, event, instance) {
  e.stopPropagation();
  let desc = "".concat(event.desc ? "".concat(event.desc.replace(/&lt/g, "<").replace(/&gt/g, ">").replace(/&nbsp/g, " "), "  ") : "").concat(event.venue.name || event.venue.phone || event.venue.email || event.venue.website ? "<p><b>Venue Details.</b></p>  " : "").concat(event.venue.name ? "".concat(event.venue.name, ",<br/>  ") : "").concat(event.venue.phone ? "".concat(event.venue.phone, ",<br/>  ") : "").concat(event.venue.email ? "".concat(event.venue.email, ",<br/>  ") : "").concat(event.venue.website ? "".concat(event.venue.website, ".<br/>  ") : "").concat(event.organizer.name || event.organizer.phone || event.organizer.email || event.organizer.website ? "<p><b>Organizer</b></p>  " : "").concat(event.organizer.name ? "".concat(event.organizer.name, ",<br/>  ") : "").concat(event.organizer.phone ? "".concat(event.organizer.phone, ",<br/>  ") : "").concat(event.organizer.email ? "".concat(event.organizer.email, ",<br/>  ") : "").concat(event.organizer.website ? "".concat(event.organizer.website, ".<br/>  ") : "");
  let icsSharer = "https://calendar.boomte.ch/createIcsFile?title=".concat(encodeURIComponent(event.title), "&desc=").concat(encodeURIComponent(desc), "&start=").concat(formatEventDateForIcs(event.start, event.all_day), "&end=").concat(formatEventDateForIcs(event.end, event.all_day), "&address=").concat(encodeURIComponent(event.venue.address), "&type=").concat(type, "&instance=").concat(instance);
  window.location.href = icsSharer;
}
function openAddToUrl(e, type, event) {
  e.stopPropagation();
  let eventDescription = "";
  let url;
  switch (type) {
    case "google":
      eventDescription = event.desc ? createDesc(event, "google") : "";
      if (event.all_day) url = "https://www.google.com/calendar/render?action=TEMPLATE&text=".concat(encodeURIComponent(event.title), "\n        &dates=").concat((0, _momentTimezone.default)(formatForAddtoCalendar(event, "start", type)).format("YYYYMMDD"), "/").concat((0, _momentTimezone.default)(formatForAddtoCalendar(event, "end")).format("YYYYMMDD"), "&details=").concat(event.desc ? eventDescription : "", "&location=").concat(setLocation(event, "encode"));else url = "https://www.google.com/calendar/render?action=TEMPLATE&text=".concat(encodeURIComponent(event.title), "\n        &dates=").concat((0, _momentTimezone.default)(formatForAddtoCalendar(event, "start", type)).format("YYYYMMDD[T]HHmmss"), "/").concat((0, _momentTimezone.default)(formatForAddtoCalendar(event, "end")).format("YYYYMMDD[T]HHmmss"), "&details=").concat(event.desc ? eventDescription : "", "&location=").concat(setLocation(event, "encode"));
      break;
    case "yahoo":
      eventDescription = event.desc ? createDesc(event, "yahoo") : "";
      if (event.all_day) url = "https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=" + (event.all_day ? "all_day" : "") + "&TITLE=" + encodeURIComponent(event.title) + "&ST=" + (0, _momentTimezone.default)(formatForAddtoCalendar(event, "start", type)).format("YYYYMMDD") + "&ET=" + (0, _momentTimezone.default)(formatForAddtoCalendar(event, "end", "yahoo")).format("YYYYMMDD") + "&DESC=" + eventDescription + "&in_loc=" + setLocation(event);else url = "https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=" + encodeURIComponent(event.title) + "&ST=" + (0, _momentTimezone.default)(formatForAddtoCalendar(event, "start", type)).format("YYYYMMDD[T]HHmmss") + "&ET=" + (0, _momentTimezone.default)(formatForAddtoCalendar(event, "end")).format("YYYYMMDD[T]HHmmss") + "&DESC=" + eventDescription + "&in_loc=" + setLocation(event);
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
    fullStart = (0, _momentTimezone.default)(event.start).format("YYYY-MM-DD");
    if (event.end !== event.start) {
      fullEnd = (0, _momentTimezone.default)(event.end).add(1, "days").format("YYYY-MM-DD");
    } else {
      fullEnd = (0, _momentTimezone.default)(event.end).format("YYYY-MM-DD");
      if (type !== "yahoo") fullEnd = (0, _momentTimezone.default)(event.end).add(1, "days").format("YYYY-MM-DD");
    }
  } else {
    fullStart = (0, _momentTimezone.default)(event.start).format("YYYY-MM-DDTHH:mm:ss");
    fullEnd = (0, _momentTimezone.default)(event.end).format("YYYY-MM-DDTHH:mm:ss");
  }
  if (type === "yahoo" && event.end !== event.start) fullEnd = (0, _momentTimezone.default)(fullEnd).subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss");
  return key === "start" ? fullStart : fullEnd;
}
function setLocation(event, key) {
  if (event.location) {
    if (key === "encode") return encodeURIComponent(event.location);else return event.location;
  }
  let venue = event.venue;
  if (venue && venue.address) {
    const subDataToProcess = [venue.address, venue.city, venue.statesList, venue.postal, venue.country];
    return arrStringify(subDataToProcess, "+");
  }
  return "";
}
const arrStringify = function arrStringify(arr) {
  let separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return arr.filter(v => !!v).map(v => encodeURIComponent(v)).join(separator);
};
const plainTextFromHTML = htmlStr => {
  let div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.textContent || div.innerText || "";
};
const createDesc = (event, type) => {
  var _Object$values, _Object$values2;
  return "".concat(event.desc ? "".concat(encodeURIComponent(type === "yahoo" ? plainTextFromHTML(event.desc) : event.desc)) : "", "\n    ").concat(((_Object$values = Object.values(event.organizer)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0 ? "%0D%0A%0D%0AVenue Details:%0D%0A" : "", "\n    ").concat(event.venue.name ? "".concat(encodeURIComponent(event.venue.name), "%0D%0A") : "", "\n    ").concat(event.venue.phone ? "".concat(encodeURIComponent(event.venue.phone), "%0D%0A") : "", "\n    ").concat(event.venue.email ? "".concat(encodeURIComponent(event.venue.email), "%0D%0A") : "", "\n    ").concat(event.venue.website ? "".concat(encodeURIComponent(event.venue.website), "%0D%0A%0D%0A") : "", "\n    ").concat(((_Object$values2 = Object.values(event.organizer)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.length) > 0 ? "%0D%0A%0D%0AOrganizer Details:%0D%0A" : "", "\n    ").concat(event.organizer.name ? "".concat(encodeURIComponent(event.organizer.name), "%0D%0A") : "", "\n    ").concat(event.organizer.phone ? "".concat(encodeURIComponent(event.organizer.phone), "%0D%0A") : "", "\n    ").concat(event.organizer.email ? "".concat(encodeURIComponent(event.organizer.email), "%0D%0A") : "", "\n    ").concat(event.organizer.website ? "".concat(encodeURIComponent(event.organizer.website)) : "");
};
function openShareUrl(e, type, eventUrl) {
  e.stopPropagation();
  let base,
    isFb = type === "facebook",
    isLinkedIn = type === "linkedin";
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
  if (!isLinkedIn) window.open(base + eventUrl, !isFb && "_blank", isFb && "resizable,width=500,height=400");else window.open(base + eventUrl, "_blank");
  return;
}
function generateEventUrl(event, boomEventUrlBase, addDateInUrl, dateParams) {
  if (event.kind === 4) {
    return event.eventPageUrl || "";
  } else {
    return "".concat(boomEventUrlBase).concat((0, _commons.encodeId)("".concat(event.id))).concat(addDateInUrl ? encodeURIComponent("?date=".concat(dateParams.join(","))) : "");
  }
}
function copyLink(e, setCopyTooltipText, copiedTooltipText, eventUrl) {
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
function checkProps(props) {
  if (!props.comp_id) return console.error("component is not rendered as comp_id was missing in props or a falsy value is assigned to it");
  if (!props.instance) return console.error("component is not rendered as instance was missing in props or a falsy value is assigned to it");
  if (!props.event || !props.event.hasOwnProperty("id")) return console.error("component is not rendered as event object was missing in props or doesn't match to event object skeleton");
  if (!props.boomEventUrlBase) return console.error("component is not rendered as boomEventUrlBase was missing in props or a falsy value is assigned to it");
  return true;
}