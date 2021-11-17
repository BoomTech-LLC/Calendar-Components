"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateBox = _interopRequireDefault(require("./DateBox"));

var _TimeBox = _interopRequireDefault(require("./TimeBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DateBox = _ref => {
  let {
    start,
    end,
    locale = 'en',
    showIcons = true,
    dateFormat = 'dddd, MMMM DD YYYY',
    timeFormat = 'am/pm',
    all_day = true,
    showTimeZone = false,
    timeZone = '',
    wrapperCustomClassNames = [],
    agenda = false,
    type = 'timeBox',
    allDayText = 'All Day',
    oneLine = false,
    direction = 'row',
    showYear = false,
    fixedHeight = false
  } = _ref;

  if (type === 'timeBox') {
    return /*#__PURE__*/_react.default.createElement(_TimeBox.default, {
      start: start,
      end: end,
      locale: locale,
      showIcons: showIcons,
      dateFormat: dateFormat,
      timeFormat: timeFormat,
      all_day: all_day,
      showTimeZone: showTimeZone,
      timeZone: timeZone,
      wrapperCustomClassNames: wrapperCustomClassNames,
      agenda: agenda,
      allDayText: allDayText,
      oneLine: oneLine,
      showYear: showYear,
      fixedHeight: fixedHeight
    });
  }

  return /*#__PURE__*/_react.default.createElement(_DateBox.default, {
    start: start,
    end: end,
    locale: locale,
    wrapperCustomClassNames: wrapperCustomClassNames,
    direction: direction
  });
};

DateBox.propTypes = {
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  timeFormat: _propTypes.default.string,
  all_day: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  showTimeZone: _propTypes.default.bool,
  timeZone: _propTypes.default.string,
  type: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.array,
  oneLine: _propTypes.default.bool,
  direction: _propTypes.default.string,
  showYear: _propTypes.default.bool,
  fixedHeight: _propTypes.default.bool
};
var _default = DateBox;
exports.default = _default;