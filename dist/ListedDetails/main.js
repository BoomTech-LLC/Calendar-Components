"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/esnext.iterator.some.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
require("../icons.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _commons = require("../helpers/commons");
var _constants = require("../helpers/constants");
var _Location = _interopRequireDefault(require("./../Location"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ListedDetails = _ref => {
  let {
    id,
    values,
    title = '',
    titleBorderHidden = false,
    wrapperCustomClassNames = [],
    textDetailsCustomClassNames = [],
    linkDetailsCustomClassNames = [],
    rowSpace = '0.25rem'
  } = _ref;
  const parsedValues = (0, _commons.parseJson)(values);
  const hasAcceptableValues = Object.entries(parsedValues).some(_ref2 => {
    let [key, value] = _ref2;
    return _constants.LISTED_DETAILS_CONSTRUCTOR[key] && value;
  });
  if ((0, _commons.isObjectEmpty)(parsedValues) || !hasAcceptableValues) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.listed_details_block, ...wrapperCustomClassNames]),
    style: {
      gap: rowSpace
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: titleBorderHidden ? '' : _mainModule.default.bordered
  }, title), Object.entries(parsedValues).map(val => {
    const itemKey = "listed-details-".concat(id, "-").concat(val[0], "}");
    if (val[0] === 'location') return /*#__PURE__*/_react.default.createElement(_Location.default, _extends({
      key: itemKey,
      linkClassName: linkDetailsCustomClassNames.join(' ')
    }, val[1]));
    let [key, value] = val;
    if (!value) return null;
    const template = _constants.LISTED_DETAILS_CONSTRUCTOR[key];
    if (!template) return null;
    if (template.validate) value = template.validate(value);
    return /*#__PURE__*/_react.default.createElement(DetailsItem, {
      key: itemKey,
      value: value,
      template: template,
      rowCustomClassNames: (0, _commons.isDefined)(template.preposition) ? linkDetailsCustomClassNames : textDetailsCustomClassNames
    });
  }));
};
const DetailsItem = _ref3 => {
  let {
    value,
    template,
    rowCustomClassNames
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.listed_details_row, ...rowCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'icon-' + template.iconName
  }), /*#__PURE__*/_react.default.createElement("div", null, !(0, _commons.isDefined)(template.preposition) ? /*#__PURE__*/_react.default.createElement("div", null, value) : /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: template.preposition + value,
    rel: "noreferrer",
    onClick: _commons.stopPropagation
  }, value)));
};
ListedDetails.propTypes = {
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  titleBorderHidden: _propTypes.default.bool,
  values: _propTypes.default.object.isRequired,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  textDetailsCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  linkDetailsCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ListedDetails);