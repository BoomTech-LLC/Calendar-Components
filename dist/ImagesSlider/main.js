"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BlurryLoadableImg = _interopRequireDefault(require("../BlurryLoadableImg"));
var _react2 = require("swiper/react");
var _modules = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
var _commons = require("../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ImagesSlider = _ref => {
  let {
    image,
    navigation = true,
    style,
    color,
    title,
    showColorAsBackground,
    imgWrapperCustomClassNames,
    imgCustomClassNames,
    eventKind,
    opacity
  } = _ref;
  return /*#__PURE__*/React.createElement(_react2.Swiper, {
    modules: [_modules.Navigation, _modules.Autoplay],
    autoplay: {
      delay: (0, _commons.getRandomNumber)(2000, 4000)
    },
    loop: true,
    lazy: true,
    navigation: navigation,
    style: style,
    onSwiper: swiper => {
      var _swiper$navigation, _swiper$navigation2;
      if (!((_swiper$navigation = swiper.navigation) !== null && _swiper$navigation !== void 0 && _swiper$navigation.nextEl) || !((_swiper$navigation2 = swiper.navigation) !== null && _swiper$navigation2 !== void 0 && _swiper$navigation2.prevEl)) return;
      const stop = e => e.stopPropagation();
      swiper.navigation.nextEl.addEventListener("click", stop);
      swiper.navigation.prevEl.addEventListener("click", stop);
    }
  }, image.map(url => {
    return /*#__PURE__*/React.createElement(_react2.SwiperSlide, null, /*#__PURE__*/React.createElement(_BlurryLoadableImg.default, {
      url: url,
      color: color,
      title: title,
      showColorAsBackground: showColorAsBackground,
      imgWrapperCustomClassNames: imgWrapperCustomClassNames,
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
  opacity: _propTypes.default.number
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ImagesSlider);