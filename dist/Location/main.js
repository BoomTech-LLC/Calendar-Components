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

var _location = _interopRequireDefault(require("./icons/location"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Location = _ref => {
  let {
    wrapperCustomClassNames = [],
    address,
    disabled = false,
    showIcon = true
  } = _ref;
  if (!address) return null;

  const redirectToGoogleMaps = () => {
    !disabled && window.open("https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(address)), '_blank');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.location_parent, ...wrapperCustomClassNames]),
    onClick: redirectToGoogleMaps
  }, showIcon && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_location.default, null)), /*#__PURE__*/_react.default.createElement("p", null, address));
};

Location.propTypes = {
  address: _propTypes.default.string.isRequired,
  wrapperCustomClassNames: _propTypes.default.array,
  disabled: _propTypes.default.bool,
  showIcon: _propTypes.default.bool
};
var _default = Location;
exports.default = _default;