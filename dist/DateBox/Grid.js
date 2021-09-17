"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("./../helpers/dateBox");

var _commons = require("./../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Grid = _ref => {
  let {
    start,
    end,
    locale,
    wrapperCustomClassNames = []
  } = _ref;
  const {
    currentDay,
    isUpcoming,
    eventStartDay,
    dayOfWeek,
    month
  } = (0, _dateBox.getDayOfMonth)(start, end, locale);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.container, ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.day_of_month
  }, /*#__PURE__*/_react.default.createElement("p", null, isUpcoming ? currentDay : eventStartDay)), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.month_day_of_week_parent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.month
  }, /*#__PURE__*/_react.default.createElement("p", null, dayOfWeek)), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.day_of_week
  }, /*#__PURE__*/_react.default.createElement("p", null, month))));
};

exports.Grid = Grid;
Grid.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  locale: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array
};