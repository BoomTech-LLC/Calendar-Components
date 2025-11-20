"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
require("../icons.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _commons = require("../helpers/commons");
var _CategoryItem = _interopRequireDefault(require("../CategoryItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Categories = props => {
  if (!props.categories) return null;
  const {
    categories,
    wrapperCustomClassNames = []
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, _mainModule.default.categories_wrapper])
  }, categories.map(category => {
    return /*#__PURE__*/_react.default.createElement(_CategoryItem.default, {
      category: category,
      key: category.id
    });
  }));
};
Categories.propTypes = {
  categories: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    name: _propTypes.default.string,
    color: _propTypes.default.string
  })),
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Categories);