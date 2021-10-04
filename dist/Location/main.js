"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Location = _ref => {
  let {
    wrapperCustomClassNames = [],
    address,
    disabled = false,
    showIcon = true,
    oneLine = false
  } = _ref;
  if (!address) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.location_parent, ...wrapperCustomClassNames])
  }, showIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.icon + " icon-Location"
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: disabled ? undefined : "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(address)),
    target: "_blank",
    className: oneLine ? _mainModule.default.oneLine : undefined,
    onClick: e => disabled && e.preventDefault()
  }, address));
};

Location.propTypes = {
  address: _propTypes.default.string.isRequired,
  wrapperCustomClassNames: _propTypes.default.array,
  disabled: _propTypes.default.bool,
  showIcon: _propTypes.default.bool,
  oneLine: _propTypes.default.bool
};
var _default = Location;
exports.default = _default;