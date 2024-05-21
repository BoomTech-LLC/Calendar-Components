"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BlurryLoadableImg = _interopRequireDefault(require("../BlurryLoadableImg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ImagesSlider = _ref => {
  let {
    image
  } = _ref;
  const [activeIndex, setActiveIndex] = (0, _react.useState)(0);
  const scrollParent = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (scrollParent.current) {
      scrollParent.current.scrollTo({
        left: activeIndex * scrollParent.current.offsetWidth + activeIndex * 12,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      gap: 6,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveIndex(Math.max(activeIndex - 1, 0)),
    style: {
      cursor: "pointer",
      position: "absolute",
      background: "red",
      left: 10,
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chevron-down chevron-left",
    style: {
      display: "flex"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(".concat(image.length, ", 100%)"),
      width: "100%",
      overflow: "hidden",
      gap: 12
    },
    ref: scrollParent
  }, image.map(url => {
    return /*#__PURE__*/React.createElement(_BlurryLoadableImg.default, {
      url: url,
      color: "",
      title: "asdasd"
    });
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveIndex(Math.min(activeIndex + 1, image.length - 1)),
    style: {
      cursor: "pointer",
      position: "absolute",
      background: "red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: 10,
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chevron-down chevron-right",
    style: {
      display: "flex"
    }
  }))));
};
ImagesSlider.propTypes = {
  image: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ImagesSlider);