"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DateBox = _interopRequireDefault(require("./dateBox/DateBox"));
var _TimeBox = _interopRequireDefault(require("./timeBox/TimeBox"));
require("../icons.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DateBox = _ref => {
  let {
    start,
    end,
    locale = 'en',
    showIcons = true,
    dateFormat = 'dddd, MMMM DD YYYY',
    timeFormat = 'am/pm',
    allDay = true,
    showTimeZone = false,
    timeZone = '',
    wrapperCustomClassNames = [],
    agenda = false,
    type = 'timeBox',
    allDayText = 'All Day',
    oneLine = false,
    direction = 'row',
    fixedHeight = false,
    dayNumberSize = 40,
    startDateOnly = false,
    showTimeOnly = false,
    isMapRepeat = false,
    changeRepeatDate,
    repeatEvents,
    additional,
    monthNameType = 'long',
    oneLineTimeBox = false,
    makeDatesSeperate = false
  } = _ref;
  if (type === 'timeBox') {
    return /*#__PURE__*/_react.default.createElement(_TimeBox.default, {
      start: start,
      end: end,
      locale: locale,
      showIcons: showIcons,
      dateFormat: dateFormat,
      timeFormat: timeFormat,
      allDay: allDay,
      showTimeZone: showTimeZone,
      timeZone: timeZone,
      wrapperCustomClassNames: wrapperCustomClassNames,
      agenda: agenda,
      allDayText: allDayText,
      oneLine: oneLine,
      fixedHeight: fixedHeight,
      startDateOnly: startDateOnly,
      showTimeOnly: showTimeOnly,
      isMapRepeat: isMapRepeat,
      changeRepeatDate: changeRepeatDate,
      repeatEvents: repeatEvents,
      additional: additional,
      monthNameType: monthNameType,
      oneLineTimeBox: oneLineTimeBox
    });
  }
  return /*#__PURE__*/_react.default.createElement(_DateBox.default, {
    start: start,
    end: end,
    locale: locale,
    wrapperCustomClassNames: wrapperCustomClassNames,
    direction: direction,
    dayNumberSize: dayNumberSize,
    monthNameType: monthNameType,
    makeDatesSeperate: makeDatesSeperate
  });
};
DateBox.propTypes = {
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  dateFormat: _propTypes.default.string,
  timeFormat: _propTypes.default.string,
  allDay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  showTimeZone: _propTypes.default.bool,
  timeZone: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  agenda: _propTypes.default.bool,
  type: _propTypes.default.string,
  allDayText: _propTypes.default.string,
  oneLine: _propTypes.default.bool,
  direction: _propTypes.default.string,
  fixedHeight: _propTypes.default.bool,
  dayNumberSize: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  startDateOnly: _propTypes.default.bool,
  showTimeOnly: _propTypes.default.bool,
  additional: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.string,
    text: _propTypes.default.string
  })),
  monthNameType: _propTypes.default.string,
  oneLineTimeBox: _propTypes.default.bool
};
var _default = exports.default = DateBox;