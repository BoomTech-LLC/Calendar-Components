"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _blurryLoadableImage = require("../helpers/blurryLoadableImage");

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BlurryLoadableImg = _ref => {
  let {
    url,
    color,
    title,
    wrapperCustomClassNames = [],
    imgCustomClassNames = []
  } = _ref;
  const [isOrigLoaded, setIsOrigLoaded] = (0, _react.useState)((0, _blurryLoadableImage.isImgCached)(url));
  const wrapperClassNames = (0, _react.useMemo)(() => (0, _commons.combineClassNames)([_stylesModule.default.imgWrapper, ...wrapperCustomClassNames]), [wrapperCustomClassNames]);

  if (!url) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: wrapperClassNames,
      style: {
        backgroundColor: color
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassNames
  }, (0, _blurryLoadableImage.isImgDecreasable)(url) && !isOrigLoaded && /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.blurred, ...imgCustomClassNames]),
    src: (0, _blurryLoadableImage.decreaseImgQuality)(url),
    title: title,
    alt: title
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([...imgCustomClassNames, !(0, _blurryLoadableImage.isImgDecreasable)(url) || isOrigLoaded ? _stylesModule.default.shown : _stylesModule.default.hidden]),
    onLoad: () => setIsOrigLoaded(true),
    src: url,
    title: title,
    alt: title
  }));
};

BlurryLoadableImg.propTypes = {
  url: _propTypes.default.string,
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  imgCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string)
};

var _default = /*#__PURE__*/(0, _react.memo)(BlurryLoadableImg);

exports.default = _default;