"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _commons = require("../helpers/commons");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Description = _ref => {
  let {
    title,
    children,
    wrapperCustomClassNames = []
  } = _ref;
  if (!children) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.description, ...wrapperCustomClassNames])
  }, title && /*#__PURE__*/_react.default.createElement("h3", {
    className: _mainModule.default.description_title
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: children.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    }
  }));
};
Description.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = Description;