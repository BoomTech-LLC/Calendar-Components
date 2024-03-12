"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatEventDateByTimeZone = exports.isDatesInCurrentYear = exports.formatTime = exports.formatDate = exports.getDateForDateBox = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.replace.js");

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getDateForDateBox = (start, end, locale) => {
  const [startDate] = start.split("T");
  const [endDate] = end.split("T");
  const currentDate = (0, _momentTimezone.default)().format("YYYY-MM-DD");
  const isUpcoming = (0, _momentTimezone.default)(startDate).isSameOrBefore(currentDate) && (0, _momentTimezone.default)(endDate).isSameOrAfter(currentDate);
  const dateToShow = isUpcoming ? undefined : startDate;
  return {
    day: (0, _momentTimezone.default)(dateToShow).locale(locale).format("DD"),
    week: (0, _momentTimezone.default)(dateToShow).locale(locale).format("dddd"),
    month: (0, _momentTimezone.default)(dateToShow).locale(locale).format("MMMM")
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
  const format = timeFormat.toLowerCase() === "am/pm" ? " hh:mm a" : " HH:mm";
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

const formatEventDateByTimeZone = _ref => {
  let {
    start,
    end,
    allDay,
    timeZone,
    convertDate,
    daylightSavingTime = false
  } = _ref;
  if (!convertDate) return {
    start,
    end
  };
  let _start = start;
  let _end = end;
  const format = allDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm";

  if (timeZone && !allDay) {
    const formattedTimeZone = formatTimeZone(timeZone);
    _start = _momentTimezone.default.parseZone(_start + formattedTimeZone).local().format(format);
    _end = _momentTimezone.default.parseZone(_end + formattedTimeZone).local().format(format);
  }

  if (daylightSavingTime) {
    _start = (0, _momentTimezone.default)(_start).add(1, "hour").format(format);
    _end = (0, _momentTimezone.default)(_end).add(1, "hour").format(format);
  }

  return {
    start: _start,
    end: _end
  };
};

exports.formatEventDateByTimeZone = formatEventDateByTimeZone;

const formatTimeZone = _timeZone => {
  const timeZone = _timeZone.replace("GMT", "");

  const sign = timeZone.includes("+") ? "+" : "-";
  let formattedTimeZone = "";

  if (timeZone.length === 2) {
    formattedTimeZone = sign + "0" + timeZone.replace(sign, "") + ":00";
  } else {
    formattedTimeZone = timeZone + ":00";
  }

  return formattedTimeZone;
};