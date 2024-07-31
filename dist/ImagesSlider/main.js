"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BlurryLoadableImg = _interopRequireDefault(require("../BlurryLoadableImg"));
var _bundle = require("swiper/element/bundle");
var _commons = require("../helpers/commons");
var _mainModule = _interopRequireDefault(require("./main.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(0, _bundle.register)();
const ImagesSlider = _ref => {
  let {
    image,
    navigation = true,
    style,
    color,
    title,
    showColorAsBackground,
    imgWrapperCustomClassNames = [],
    imgCustomClassNames,
    eventKind,
    opacity,
    fixedHeight = false
  } = _ref;
  const swiperRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const {
      current: swiper
    } = swiperRef;
    if (!swiper) return;
    const swiperParams = _objectSpread(_objectSpread({
      on: {
        init(swiper) {
          var _swiper$navigation, _swiper$navigation2;
          if (!((_swiper$navigation = swiper.navigation) !== null && _swiper$navigation !== void 0 && _swiper$navigation.nextEl) || !((_swiper$navigation2 = swiper.navigation) !== null && _swiper$navigation2 !== void 0 && _swiper$navigation2.prevEl)) return;
          const stop = e => e.stopPropagation();
          swiper.navigation.nextEl.addEventListener("click", stop);
          swiper.navigation.prevEl.addEventListener("click", stop);
        }
      },
      lazy: true,
      autoplay: {
        delay: (0, _commons.getRandomNumber)(2000, 4000)
      },
      speed: "600",
      loop: "true",
      navigation,
      style
    }, fixedHeight ? {} : {
      autoHeight: true
    }), {}, {
      injectStyles: ["\n          :host  {\n            --swiper-navigation-color: #fff;\n            --swiper-navigation-size: 24px;\n            ".concat(fixedHeight ? "height: 100%;width:100%;" : "", "\n          }\n          ").concat(fixedHeight ? "::slotted(swiper-slide) {height: unset;}" : "", "\n          ")]
    });
    Object.assign(swiper, swiperParams);
    swiper.initialize();
  }, []);
  return /*#__PURE__*/_react.default.createElement("swiper-container", {
    init: "false",
    ref: swiperRef
  }, image.map(url => {
    return /*#__PURE__*/_react.default.createElement("swiper-slide", null, /*#__PURE__*/_react.default.createElement(_BlurryLoadableImg.default, {
      url: url,
      color: color,
      title: title,
      showColorAsBackground: showColorAsBackground,
      wrapperCustomClassNames: [...imgWrapperCustomClassNames, _mainModule.default.imageWrapper],
      imgCustomClassNames: imgCustomClassNames,
      eventKind: eventKind,
      opacity: opacity
    }));
  }));
};
ImagesSlider.propTypes = {
  image: _propTypes.default.arrayOf(_propTypes.default.string),
  navigation: _propTypes.default.bool,
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  showColorAsBackground: _propTypes.default.bool,
  imgWrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  imgCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  eventKind: _propTypes.default.number,
  opacity: _propTypes.default.number,
  fixedHeight: _propTypes.default.bool
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ImagesSlider);