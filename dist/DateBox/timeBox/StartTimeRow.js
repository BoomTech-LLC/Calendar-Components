"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./../main.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const StartTimeRow = _ref => {
  let {
    showIcons,
    datesEqual,
    oneLine,
    startDate,
    startTime,
    timeZoneToShow,
    allDay
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_start
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: datesEqual || allDay ? "icon-date" : "icon-clock"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, "".concat(startDate, " ").concat(datesEqual ? "" : "".concat(startTime, " ").concat(timeZoneToShow))));
};
StartTimeRow.propTypes = {
  datesEqual: _propTypes.default.bool,
  startDate: _propTypes.default.string,
  startTime: _propTypes.default.string,
  timeZoneToShow: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  oneLine: _propTypes.default.bool,
  allDay: _propTypes.default.bool
};
var _default = exports.default = StartTimeRow;