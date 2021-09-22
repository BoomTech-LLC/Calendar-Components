"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../helpers/commons");

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ListedDetailsTemplate = {
  name: {
    icon: /*#__PURE__*/_react.default.createElement(_icons.NameIcon, null)
  },
  phone: {
    preposition: 'tel:',
    icon: /*#__PURE__*/_react.default.createElement(_icons.PhoneIcon, null)
  },
  email: {
    preposition: 'mailto:',
    icon: /*#__PURE__*/_react.default.createElement(_icons.EmailIcon, null)
  },
  website: {
    preposition: '',
    icon: /*#__PURE__*/_react.default.createElement(_icons.WebsiteIcon, null)
  }
};

const ListedDetails = _ref => {
  let {
    id,
    values,
    title,
    titleBorderHidden = false,
    wrapperCustomClassNames = [],
    rowCustomClassNames = []
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.listedDetailsBlock, ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: titleBorderHidden ? '' : _stylesModule.default.bordered
  }, title), Object.entries(values).map(value => {
    return /*#__PURE__*/_react.default.createElement(DetailsItem, {
      key: "listed-details-".concat(id, "-").concat(value[0], "}"),
      data: value,
      rowCustomClassNames: rowCustomClassNames
    });
  }));
};

const DetailsItem = _ref2 => {
  let {
    data,
    rowCustomClassNames
  } = _ref2;
  if (!data || !data[1]) return null;
  const [key, value] = data;
  const template = ListedDetailsTemplate[key];
  if (!template) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.listedDetailsRow, ...rowCustomClassNames])
  }, template.icon, !(0, _commons.isDefined)(template.preposition) ? /*#__PURE__*/_react.default.createElement("span", null, value) : /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: template.preposition + value,
    rel: "noreferrer"
  }, value));
};

ListedDetails.propTypes = {
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  titleBorderHidden: _propTypes.default.bool,
  values: _propTypes.default.object.isRequired,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  rowCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};

var _default = /*#__PURE__*/(0, _react.memo)(ListedDetails);

exports.default = _default;