"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.formatDate = exports.getDayOfMonth = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.replace.js");

const getDayOfMonth = (start, end, locale) => {
  const [startDate] = start.split('T');
  const [endDate] = end.split('T');
  const currentDate = moment().format('YYYY-MM-DD');
  const isUpcoming = moment(startDate).isSameOrBefore(currentDate) && moment(endDate).isSameOrAfter(currentDate);
  return {
    currentDay: moment().locale(locale).format('DD'),
    eventStartDay: moment(startDate).locale(locale).format('DD'),
    dayOfWeek: moment(startDate).locale(locale).format('dddd'),
    month: moment(startDate).locale(locale).format('MMMM'),
    isUpcoming
  };
};

exports.getDayOfMonth = getDayOfMonth;

const getFormattedDate = (date, dateFormat, locale, showYear, isEndDate) => {
  if (isEndDate) {
    date = moment(date).subtract(1, 'days');
  }

  let format = dateFormat;

  if (dateFormat.includes('YYYY') && moment(date).format('YYYY') === moment().format('YYYY') && !showYear) {
    const yearRegex = new RegExp(',? ?,?YYYY,? ?,?');
    format = dateFormat.split(yearRegex)[1] ? dateFormat.replace(/,? ?,?YYYY/, '').trim() : dateFormat.replace(yearRegex, '').trim();
  }

  return moment(date).locale(locale).format(format);
};

const formatDate = (start, end, dateFormat, locale, showYear, all_day) => ({
  startDate: getFormattedDate(start.replace('T', ' '), dateFormat, locale, showYear),
  endDate: getFormattedDate(end.replace('T', ' '), dateFormat, locale, showYear, all_day && start !== end)
});

exports.formatDate = formatDate;

const formatTime = (start, end, timeFormat, all_day, locale) => {
  const format = timeFormat.toLowerCase() === 'am/pm' ? ' hh:mm a' : ' HH:mm';
  return {
    startTime: all_day ? '' : moment(start.replace('T', ' ')).locale(locale).format(format),
    endTime: all_day ? '' : moment(end.replace('T', ' ')).locale(locale).format(format)
  };
};

exports.formatTime = formatTime;