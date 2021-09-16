"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Description = _ref => {
  let {
    children,
    customClassNames = []
  } = _ref;
  const descriptionNode = (0, _htmlReactParser.default)(children);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.description, ...customClassNames])
  }, descriptionNode);
};

Description.propTypes = {
  children: _propTypes.default.string,
  customClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = Description;
exports.default = _default;