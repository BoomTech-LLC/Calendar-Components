"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeBox = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireDefault(require("react"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../helpers/dateBox");

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TimeBox = _ref => {
  let {
    start,
    end,
    showIcons,
    locale,
    dateFormat,
    timeFormat,
    all_day,
    timeZone,
    wrapperCustomClassNames = [],
    agenda,
    allDayText,
    oneLine,
    showYear,
    year
  } = _ref;
  const {
    startDate,
    endDate
  } = (0, _dateBox.formatDate)(start, end, dateFormat, locale);
  const {
    startTime,
    endTime
  } = (0, _dateBox.formatTime)(start, end, timeFormat, all_day, locale);
  const timeZoneToShow = all_day ? '' : timeZone;
  const datesEqual = startDate === endDate;
  const yearInfo = showYear ? ', ' + year + ', ' : '';

  if (datesEqual && all_day && agenda) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _commons.combineClassNames)([_mainModule.default.all_day_text_parent, ...wrapperCustomClassNames])
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "all_day_text"
    }, allDayText));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, !(datesEqual && agenda) && /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_start
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: datesEqual ? _mainModule.default.calendar_icon + ' icon-calendar' : _mainModule.default.start_date_icon + ' icon-clock'
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, startDate + yearInfo + (datesEqual ? '' : startTime + ' ' + timeZoneToShow))), !(datesEqual && all_day) && /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_end
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: (datesEqual ? _mainModule.default.start_date_icon : _mainModule.default.end_date_icon) + ' icon-clock'
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, !datesEqual ? endDate + yearInfo + endTime + ' ' + timeZoneToShow : startTime.trim() + ' -' + endTime + ' ' + timeZoneToShow)));
};

exports.TimeBox = TimeBox;
TimeBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.array,
  oneLine: _propTypes.default.bool
};