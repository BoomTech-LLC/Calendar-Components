"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("./Grid");

var _TwoLines = require("./TwoLines");

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
    parentClassName = '',
    agenda = false,
    type = 'twolines'
  } = _ref;

  if (type === 'twolines') {
    return /*#__PURE__*/_react.default.createElement(_TwoLines.TwoLines, {
      start: start,
      end: end,
      locale: locale,
      showIcons: showIcons,
      dateFormat: dateFormat,
      timeFormat: timeFormat,
      all_day: all_day,
      timeZone: timeZone,
      parentClassName: parentClassName,
      agenda: agenda
    });
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Grid, {
    start: start,
    end: end,
    locale: locale,
    parentClassName: parentClassName
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
  parentClassName: _propTypes.default.string
};
var _default = DateBox;
exports.default = _default;