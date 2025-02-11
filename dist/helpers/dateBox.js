"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRegistrationClosed = exports.isDatesInCurrentYear = exports.getDateForDateBox = exports.formatTime = exports.formatEventDateByTimeZone = exports.formatDate = exports.findAppropriateTimezone = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.every.js");
require("core-js/modules/esnext.iterator.find.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getDateForDateBox = (start, end, locale, monthNameType) => {
  const [startDate] = start.split("T");
  const [endDate] = end.split("T");
  const currentDate = (0, _momentTimezone.default)().format("YYYY-MM-DD");
  const isUpcoming = (0, _momentTimezone.default)(startDate).isSameOrBefore(currentDate) && (0, _momentTimezone.default)(endDate).isSameOrAfter(currentDate);
  const dateToShow = isUpcoming ? undefined : startDate;
  const isShort = monthNameType === "short";
  return {
    day: (0, _momentTimezone.default)(dateToShow).locale(locale).format("DD"),
    week: (0, _momentTimezone.default)(dateToShow).locale(locale).format("dddd"),
    month: (0, _momentTimezone.default)(dateToShow).locale(locale).format(isShort ? "MMM" : "MMMM")
  };
};
exports.getDateForDateBox = getDateForDateBox;
const getFormattedDate = (date, dateFormat, locale, showYearAnyway) => {
  let format = dateFormat;
  if (dateFormat.includes("YYYY") && !showYearAnyway && (0, _momentTimezone.default)(date).format("YYYY") === (0, _momentTimezone.default)().format("YYYY")) {
    const yearRegex = new RegExp(",? ?,?YYYY,? ?,?");
    format = dateFormat.split(yearRegex)[1] ? dateFormat.replace(/,? ?,?YYYY/, "").trim() : dateFormat.replace(yearRegex, "").trim();
  }
  return (0, _momentTimezone.default)(date).locale(locale).format(format);
};
const formatDate = (start, end, dateFormat, locale) => {
  const startDate = start.replace("T", " ");
  const endDate = end.replace("T", " ");
  const showYearAnyway = dateFormat.includes("YYYY") && !isDatesInCurrentYear(startDate, endDate);
  return {
    startDate: getFormattedDate(startDate, dateFormat, locale, showYearAnyway),
    endDate: getFormattedDate(endDate, dateFormat, locale, showYearAnyway)
  };
};
exports.formatDate = formatDate;
const formatTime = (start, end, timeFormat, all_day, locale) => {
  const format = timeFormat.toLowerCase() === "am/pm" ? " h:mm a" : " HH:mm";
  return {
    startTime: all_day ? "" : (0, _momentTimezone.default)(start.replace("T", " ")).locale(locale).format(format),
    endTime: all_day ? "" : (0, _momentTimezone.default)(end.replace("T", " ")).locale(locale).format(format)
  };
};
exports.formatTime = formatTime;
const isDatesInCurrentYear = (start, end) => {
  const currentYear = (0, _momentTimezone.default)().format("YYYY");
  const dates = [(0, _momentTimezone.default)(start.replace("T", " ")).format("YYYY"), (0, _momentTimezone.default)(end.replace("T", " ")).format("YYYY")];
  return dates.every(date => date === currentYear);
};
exports.isDatesInCurrentYear = isDatesInCurrentYear;
const findAppropriateTimezone = timeZone => {
  var _TIMEZONE_LIST$find;
  const selectedTimezoneId = _constants.TIMEZONE_LIST.find(tz => tz.offset === timeZone || tz.tzName === timeZone);
  if (selectedTimezoneId) return selectedTimezoneId.tzName;
  const currentOffsetMinutes = _momentTimezone.default.tz(timeZone).utcOffset();
  const offsetHours = Math.floor(Math.abs(currentOffsetMinutes) / 60);
  const gmtOffsetString = "GMT".concat(currentOffsetMinutes >= 0 ? "+" : "-").concat(offsetHours);
  return ((_TIMEZONE_LIST$find = _constants.TIMEZONE_LIST.find(tz => tz.offset === gmtOffsetString)) === null || _TIMEZONE_LIST$find === void 0 ? void 0 : _TIMEZONE_LIST$find.tzName) || timeZone;
};
exports.findAppropriateTimezone = findAppropriateTimezone;
const isRegistrationClosed = (timeZone, eventStartDate, convertDate, allDay) => {
  let toggle = false;
  const eventTimezone = timeZone || _momentTimezone.default.tz.guess();
  if (allDay) {
    if ((0, _momentTimezone.default)().tz(findAppropriateTimezone(eventTimezone)).format("YYYY-MM-DD") >= eventStartDate) {
      toggle = true;
    }
  } else {
    if (convertDate) {
      if ((0, _momentTimezone.default)().format("YYYY-MM-DDTHH:mm") >= eventStartDate) {
        toggle = true;
      }
    } else {
      if ((0, _momentTimezone.default)().tz(findAppropriateTimezone(eventTimezone)).format("YYYY-MM-DDTHH:mm") >= eventStartDate) {
        toggle = true;
      }
    }
  }
  return toggle;
};
exports.isRegistrationClosed = isRegistrationClosed;
const formatEventDateByTimeZone = _ref => {
  let {
    start,
    end,
    allDay,
    timeZone,
    convertDate,
    extraTimezone = null
  } = _ref;
  let _start = start;
  let _end = end;
  const format = allDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm";
  let currentTimezone = timeZone;
  if (currentTimezone.includes("GMT")) {
    currentTimezone = findAppropriateTimezone(currentTimezone);
  }
  if (currentTimezone && !allDay && convertDate) {
    _start = _momentTimezone.default.tz(_start, currentTimezone).clone().tz(extraTimezone || _momentTimezone.default.tz.guess()).format(format);
    _end = _momentTimezone.default.tz(_end, currentTimezone).clone().tz(extraTimezone || _momentTimezone.default.tz.guess()).format(format);
  }
  if (!convertDate) {
    _start = (0, _momentTimezone.default)(_start).format(format);
    _end = (0, _momentTimezone.default)(_end).format(format);
  }
  return {
    start: _start,
    end: _end
  };
};
exports.formatEventDateByTimeZone = formatEventDateByTimeZone;