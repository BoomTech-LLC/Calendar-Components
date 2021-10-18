"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateBox = require("./DateBox");

var _TimeBox = require("./TimeBox");

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
    timeZone = '',
    wrapperCustomClassNames = [],
    agenda = false,
    type = 'timeBox',
    allDayText = 'All Day',
    oneLine = false,
    direction = 'row'
  } = _ref;

  if (type === 'timeBox') {
    return /*#__PURE__*/_react.default.createElement(_TimeBox.TimeBox, {
      start: start,
      end: end,
      locale: locale,
      showIcons: showIcons,
      dateFormat: dateFormat,
      timeFormat: timeFormat,
      all_day: all_day,
      timeZone: timeZone,
      wrapperCustomClassNames: wrapperCustomClassNames,
      agenda: agenda,
      allDayText: allDayText,
      oneLine: oneLine
    });
  }

  return /*#__PURE__*/_react.default.createElement(_DateBox.DateBox, {
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
  timeZone: _propTypes.default.string,
  type: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.array,
  oneLine: _propTypes.default.bool,
  direction: _propTypes.default.string
};
var _default = DateBox;
exports.default = _default;