"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _blurryLoadableImage = require("../helpers/blurryLoadableImage");
var _commons = require("../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BlurryLoadableImg = _ref => {
  let {
    url,
    color,
    title,
    wrapperCustomClassNames = [],
    imgCustomClassNames = [],
    eventKind = 1,
    opacity = 1
  } = _ref;
  const [isOrigLoaded, setIsOrigLoaded] = (0, _react.useState)((0, _blurryLoadableImage.isImgCached)(url));
  const [imgLoadingFailed, setImgLoadingFailed] = (0, _react.useState)(false);
  const wrapperClassNames = (0, _react.useMemo)(() => (0, _commons.combineClassNames)([_mainModule.default.imgWrapper, ...wrapperCustomClassNames]), [wrapperCustomClassNames]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassNames,
    style: {
      backgroundColor: imgLoadingFailed ? color : 'transparent'
    }
  }, +eventKind === 5 ? /*#__PURE__*/_react.default.createElement("iframe", {
    src: url,
    height: "auto",
    width: "100%",
    allowFullScreen: true,
    style: {
      border: 'none'
    }
  }) : !imgLoadingFailed && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _blurryLoadableImage.isImgDecreasable)(url) && !isOrigLoaded && !(0, _blurryLoadableImage.isImgfromDropBox)(url) && /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([_mainModule.default.blurred, ...imgCustomClassNames]),
    src: (0, _blurryLoadableImage.decreaseImgQuality)(url),
    title: title,
    alt: title,
    onError: () => setImgLoadingFailed(true),
    style: {
      opacity
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([...imgCustomClassNames, !(0, _blurryLoadableImage.isImgDecreasable)(url) || isOrigLoaded || (0, _blurryLoadableImage.isImgfromDropBox)(url) ? _mainModule.default.shown : _mainModule.default.hidden]),
    onLoad: () => setIsOrigLoaded(true),
    src: url,
    title: title,
    alt: title,
    onError: () => setImgLoadingFailed(true),
    style: {
      opacity
    }
  })));
};
BlurryLoadableImg.propTypes = {
  url: _propTypes.default.string,
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  imgCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  eventKind: _propTypes.default.number,
  opacity: _propTypes.default.number
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(BlurryLoadableImg);