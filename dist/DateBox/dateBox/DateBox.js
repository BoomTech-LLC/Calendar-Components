"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _mainModule = _interopRequireDefault(require("./../main.module.css"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dateBox = require("../../helpers/dateBox");
var _commons = require("../../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DateBox = _ref => {
  let {
    start,
    end,
    locale,
    wrapperCustomClassNames = [],
    direction = "row",
    dayNumberSize,
    monthNameType
  } = _ref;
  const {
    day,
    week,
    month
  } = (0, _dateBox.getDateForDateBox)(start, end, locale, monthNameType);
  const container = (0, _react.useRef)();

  // useLayoutEffect(() => {
  //   container.current.style.height = container.current.offsetHeight + 'px';
  // },[])

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.container, _mainModule.default[direction], ...wrapperCustomClassNames]),
    ref: container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.day_of_month,
    style: {
      fontSize: dayNumberSize
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, day)), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.month_day_of_week_parent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.day_of_week
  }, /*#__PURE__*/_react.default.createElement("p", null, month)), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.month
  }, /*#__PURE__*/_react.default.createElement("p", null, week))));
};
var _default = exports.default = DateBox;
DateBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  locale: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  dayNumberSize: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  monthNameType: _propTypes.default.string
};