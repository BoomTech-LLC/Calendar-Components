"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _react = _interopRequireWildcard(require("react"));

var _commons = require("../../helpers/commons");

var _mainModule = _interopRequireDefault(require("./../main.module.css"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RepeatDropdown = _ref => {
  let {
    datesEqual,
    startDate,
    startTime,
    timeZoneToShow,
    repeatEvents,
    changeRepeatDate
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const wrapper = (0, _react.useRef)(null);
  console.log("changes apply");
  (0, _react.useEffect)(() => {
    const clickHandler = _ref2 => {
      var _wrapper$current;

      let {
        target
      } = _ref2;
      return !((_wrapper$current = wrapper.current) !== null && _wrapper$current !== void 0 && _wrapper$current.contains(target)) && setIsOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapper,
    className: _mainModule.default.custom__select__container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.custom__select,
    onClick: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.custom__select__flex
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _mainModule.default.custom__select__calendar
  }), /*#__PURE__*/_react.default.createElement("p", null, "".concat(startDate, " ").concat(datesEqual ? "" : "".concat(startTime, " ").concat(timeZoneToShow)))), /*#__PURE__*/_react.default.createElement("span", {
    className: _mainModule.default.custom__select__chevron
  })), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.custom__select__optgroup, " bc_tooltip_content")
  }, repeatEvents.map(item => /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _commons.combineClassNames)([_mainModule.default.custom__select__option // key == item.key ? styles["custom__select__option--active"] : "",
    ]),
    key: item.key,
    onClick: () => {
      changeRepeatDate(item.key); // dispatch(
      //   setTooltipData({
      //     keyToEvent: item.key,
      //   })
      // );

      setIsOpen(false);
    }
  }, (0, _momentTimezone.default)(item.start).format("DD/MM/YYYY")))));
};

var _default = RepeatDropdown;
exports.default = _default;