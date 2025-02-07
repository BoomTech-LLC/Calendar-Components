"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _commons = require("../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NoImageContainer = _ref => {
  let {
    showColorAsBackground = true,
    color,
    wrapperCustomClassNames = []
  } = _ref;
  const wrapperClassNames = (0, _react.useMemo)(() => (0, _commons.combineClassNames)([_mainModule.default.imgWrapper, ...wrapperCustomClassNames]), [wrapperCustomClassNames]);
  if (showColorAsBackground === false) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassNames,
    style: {
      backgroundColor: color
    }
  });
};
NoImageContainer.propTypes = {
  color: _propTypes.default.string,
  showColorAsBackground: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(NoImageContainer);