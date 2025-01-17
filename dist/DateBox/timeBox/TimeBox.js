"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _mainModule = _interopRequireDefault(require("./../main.module.css"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _StartTimeRow = _interopRequireDefault(require("./StartTimeRow"));
var _EndTimeRow = _interopRequireDefault(require("./EndTimeRow"));
var _dateBox = require("../../helpers/dateBox");
var _commons = require("../../helpers/commons");
var _RepeatDropdown = _interopRequireDefault(require("../RepeatDropdown/RepeatDropdown"));
var _additional = _interopRequireDefault(require("./additional"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TimeBox = _ref => {
  let {
    start,
    end,
    showIcons,
    locale,
    dateFormat,
    timeFormat,
    allDay,
    timeZone,
    showTimeZone,
    wrapperCustomClassNames = [],
    agenda,
    allDayText,
    oneLine,
    fixedHeight,
    startDateOnly,
    showTimeOnly,
    isMapRepeat,
    changeRepeatDate,
    repeatEvents,
    additional,
    oneLineTimeBox
  } = _ref;
  const {
    startDate,
    endDate
  } = (0, _dateBox.formatDate)(start, end, dateFormat, locale);
  const {
    startTime,
    endTime
  } = (0, _dateBox.formatTime)(start, end, timeFormat, allDay, locale);
  const datesInCurrentYear = (0, _dateBox.isDatesInCurrentYear)(start, end);
  const timeZoneToShow = showTimeZone ? (0, _commons.guessOffset)(timeZone) : "";
  const datesEqual = startDate === endDate;
  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, _mainModule.default.timebox_wrapper, oneLineTimeBox ? _mainModule.default.oneLineTimeBox : ""])
  }, isMapRepeat ? /*#__PURE__*/_react.default.createElement(_RepeatDropdown.default, {
    showIcons: showIcons,
    datesEqual: datesEqual,
    allDay: allDay,
    oneLine: oneLine,
    startDate: startDate,
    startTime: startTime,
    timeZoneToShow: timeZoneToShow,
    changeRepeatDate: changeRepeatDate,
    repeatEvents: repeatEvents,
    start: start
  }) : (!datesInCurrentYear || !(showTimeOnly && datesEqual)) && /*#__PURE__*/_react.default.createElement(_StartTimeRow.default, {
    showIcons: showIcons,
    datesEqual: datesEqual,
    allDay: allDay,
    oneLine: oneLine,
    startDate: startDate,
    startTime: startTime,
    timeZoneToShow: timeZoneToShow
  }), oneLineTimeBox ? "/" : "", /*#__PURE__*/_react.default.createElement(_EndTimeRow.default, {
    datesEqual: datesEqual,
    allDay: allDay,
    startDateOnly: startDateOnly,
    showIcons: showIcons,
    oneLine: oneLine,
    startTime: startTime,
    endTime: endTime,
    endDate: endDate,
    timeZoneToShow: timeZoneToShow,
    agenda: agenda,
    allDayText: allDayText
  }), showHiddenRow && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.two_line_start, _mainModule.default.hidden])
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, "hidden row")), /*#__PURE__*/_react.default.createElement(_additional.default, {
    additional: additional
  }));
};
TimeBox.propTypes = {
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired,
  showIcons: _propTypes.default.bool,
  locale: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  timeFormat: _propTypes.default.string,
  allDay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  timeZone: _propTypes.default.string,
  showTimeZone: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.array,
  agenda: _propTypes.default.bool,
  allDayText: _propTypes.default.string,
  oneLine: _propTypes.default.bool,
  fixedHeight: _propTypes.default.bool,
  startDateOnly: _propTypes.default.bool,
  showTimeOnly: _propTypes.default.bool,
  additional: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.string,
    text: _propTypes.default.string
  })),
  oneLineTimeBox: _propTypes.default.bool
};
var _default = exports.default = TimeBox;