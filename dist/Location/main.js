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
    displayName,
    disabled = false,
    showIcon = true,
    oneLine = false,
    // coordinates = {},
    linkClassName = ""
    // textClassName = "",
  } = _ref;
  if (!address) return null;

  // const {lat, long} = coordinates;

  // if(!lat || !long || isNaN(Number(lat)) || isNaN(Number(long))){
  //   return (
  //     <div className={combineClassNames([styles.location_parent, ...wrapperCustomClassNames])}>
  //       <p className={combineClassNames([oneLine ? styles.oneLine : undefined, textClassName])}>
  //         {displayName || address}
  //       </p>
  //     </div>
  //   )
  // }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.location_parent, ...wrapperCustomClassNames])
  }, showIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.icon, "icon-Location", linkClassName])
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: disabled ? undefined : (0, _commons.isUrl)(address) ? (0, _commons.validateUrl)(address) : "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(address)),
    target: "_blank",
    className: (0, _commons.combineClassNames)([oneLine ? _mainModule.default.oneLine : undefined, linkClassName]),
    onClick: e => {
      e.stopPropagation();
      disabled && e.preventDefault();
    }
  }, displayName || address));
};
Location.propTypes = {
  address: _propTypes.default.string,
  displayName: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  disabled: _propTypes.default.bool,
  showIcon: _propTypes.default.bool,
  oneLine: _propTypes.default.bool,
  linkClassName: _propTypes.default.string,
  textClassName: _propTypes.default.string
};
var _default = exports.default = Location;