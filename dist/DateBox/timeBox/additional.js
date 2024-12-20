"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.map.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./../main.module.css"));
var _commons = require("../../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Additional = _ref => {
  let {
    additional
  } = _ref;
  if (!(additional !== null && additional !== void 0 && additional.length)) return null;
  return additional.map((_ref2, index) => {
    let {
      icon,
      text
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _mainModule.default.two_line_start
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _commons.combineClassNames)([_mainModule.default.additionalIcon, "icon-additional-" + index])
    }), /*#__PURE__*/_react.default.createElement("style", null, ".icon-additional-".concat(index, ":before{content:\"").concat(icon, "\"}")), /*#__PURE__*/_react.default.createElement("p", {
      className: _mainModule.default.oneLine
    }, text));
  });
};
Additional.propTypes = {
  additional: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.string,
    text: _propTypes.default.string
  }))
};
var _default = exports.default = Additional;