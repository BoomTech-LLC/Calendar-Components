"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDateByTimeZone = exports.isDatesInCurrentYear = exports.formatTime = exports.formatDate = exports.getDateForDateBox = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.replace.js");

const getDateForDateBox = (start, end, locale) => {
  const [startDate] = start.split("T");
  const [endDate] = end.split("T");
  const currentDate = moment().format("YYYY-MM-DD");
  const isUpcoming = moment(startDate).isSameOrBefore(currentDate) && moment(endDate).isSameOrAfter(currentDate);
  const dateToShow = isUpcoming ? undefined : startDate;
  return {
    day: moment(dateToShow).locale(locale).format("DD"),
    week: moment(dateToShow).locale(locale).format("dddd"),
    month: moment(dateToShow).locale(locale).format("MMMM")
  };
};

exports.getDateForDateBox = getDateForDateBox;

const getFormattedDate = (date, dateFormat, locale, showYearAnyway) => {
  let format = dateFormat;

  if (dateFormat.includes("YYYY") && !showYearAnyway && moment(date).format("YYYY") === moment().format("YYYY")) {
    const yearRegex = new RegExp(",? ?,?YYYY,? ?,?");
    format = dateFormat.split(yearRegex)[1] ? dateFormat.replace(/,? ?,?YYYY/, "").trim() : dateFormat.replace(yearRegex, "").trim();
  }

  return moment(date).locale(locale).format(format);
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
    startTime: all_day ? "" : moment(start.replace("T", " ")).locale(locale).format(format),
    endTime: all_day ? "" : moment(end.replace("T", " ")).locale(locale).format(format)
  };
};

exports.formatTime = formatTime;

const isDatesInCurrentYear = (start, end) => {
  const currentYear = moment().format("YYYY");
  const dates = [moment(start.replace("T", " ")).format("YYYY"), moment(end.replace("T", " ")).format("YYYY")];
  return dates.every(date => date === currentYear);
};

exports.isDatesInCurrentYear = isDatesInCurrentYear;

const formatDateByTimeZone = _ref => {
  let {
    start,
    end,
    allDay,
    timeZone
  } = _ref;
  let _start = start;
  let _end = end;

  if (timeZone) {
    _start = moment.parseZone(_start + timeZone).local().format(allDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm");
    _end = moment.parseZone(_end + timeZone).local().format(allDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm");
  }

  return {
    start: _start,
    end: _end
  };
};

exports.formatDateByTimeZone = formatDateByTimeZone;