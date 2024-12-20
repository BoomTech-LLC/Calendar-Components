"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _react = _interopRequireWildcard(require("react"));
var _commons = require("../../helpers/commons");
var _mainModule = _interopRequireDefault(require("./../main.module.css"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RepeatDropdown = _ref => {
  let {
    datesEqual,
    startDate,
    startTime,
    timeZoneToShow,
    repeatEvents,
    changeRepeatDate,
    start
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const wrapper = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const clickHandler = _ref2 => {
      var _wrapper$current;
      let {
        target
      } = _ref2;
      return !((_wrapper$current = wrapper.current) !== null && _wrapper$current !== void 0 && _wrapper$current.contains(target)) && setIsOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapper,
    className: (0, _commons.combineClassNames)([_mainModule.default.custom__select__container, "repeat_map_dropdown_container"])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.custom__select,
    onClick: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.custom__select__flex
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-calendar"
  }), /*#__PURE__*/_react.default.createElement("p", null, "".concat(startDate, " ").concat(datesEqual ? "" : "".concat(startTime, " ").concat(timeZoneToShow)))), /*#__PURE__*/_react.default.createElement("span", {
    className: "chevron-down ".concat(isOpen ? "chevron-down--open" : "")
  })), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.custom__select__optgroup, " bc_tooltip_content")
  }, repeatEvents.map(item => /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _commons.combineClassNames)([_mainModule.default.custom__select__option, (0, _momentTimezone.default)(item.start).format("DD/MM/YYYY") == (0, _momentTimezone.default)(start).format("DD/MM/YYYY") ? _mainModule.default["custom__select__option--active"] : ""]),
    key: item.key,
    onClick: () => {
      changeRepeatDate(item.key, item.start, item.end);
      setIsOpen(false);
    }
  }, (0, _momentTimezone.default)(item.start).format("DD/MM/YYYY")))));
};
var _default = exports.default = RepeatDropdown;