"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeBox = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireDefault(require("react"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../helpers/dateBox");

var _commons = require("../helpers/commons");

var _start = _interopRequireDefault(require("./images/start"));

var _end = _interopRequireDefault(require("./images/end"));

var _calendar = _interopRequireDefault(require("./images/calendar"));

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
    allDayText
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

  if (datesEqual && all_day && agenda) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _commons.combineClassNames)([_stylesModule.default.all_day_text_parent, ...wrapperCustomClassNames])
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "all_day_text"
    }, allDayText));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, !(datesEqual && agenda) && /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.two_line_start
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", null, datesEqual ? /*#__PURE__*/_react.default.createElement(_calendar.default, null) : /*#__PURE__*/_react.default.createElement(_start.default, null)), /*#__PURE__*/_react.default.createElement("p", null, startDate + (datesEqual ? '' : startTime + ' ' + timeZoneToShow))), !(datesEqual && all_day) && /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.two_line_end
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", null, datesEqual ? /*#__PURE__*/_react.default.createElement(_start.default, null) : /*#__PURE__*/_react.default.createElement(_end.default, null)), /*#__PURE__*/_react.default.createElement("p", null, !datesEqual ? endDate + endTime + ' ' + timeZoneToShow : startTime.trim() + ' -' + endTime + ' ' + timeZoneToShow)));
};

exports.TimeBox = TimeBox;
TimeBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.array
};