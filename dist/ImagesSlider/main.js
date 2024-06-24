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
require("swiper/swiper.css");
require("swiper/modules/navigation.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ImagesSlider = _ref => {
  let {
    image
  } = _ref;
  return /*#__PURE__*/React.createElement(_react2.Swiper, {
    modules: [_modules.Navigation, _modules.Autoplay],
    autoplay: {
      delay: 1000
    },
    loop: true
  }, image.map(url => {
    return /*#__PURE__*/React.createElement(_react2.SwiperSlide, null, /*#__PURE__*/React.createElement(_BlurryLoadableImg.default, {
      url: url,
      color: "",
      title: "asdasd"
    }));
  }));
};
ImagesSlider.propTypes = {
  image: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ImagesSlider);