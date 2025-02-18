"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddShareIcons;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
require("../icons.css");
var _constants = require("../helpers/constants");
var _commons = require("../helpers/commons");
var _addShare = require("../helpers/addShare");
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const getOrigEndDate = (allDay, endDate, startDate) => {
  const date = endDate || startDate;
  return allDay && endDate !== startDate ? (0, _momentTimezone.default)(date).subtract(1, "d").format("YYYY-MM-DD") : date;
};
function AddShareIcons(_ref) {
  let {
    title = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.TITLE,
    comp_id,
    instance,
    instanceShort,
    titleBorderHidden = false,
    addToSectionName = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.addToSectionName,
    hideAddToIcons = false,
    shareSectionName = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.shareSectionName,
    hideShareIcons = false,
    boomEventUrlBase,
    event,
    copyActionTooltipText = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copyActionTooltipText,
    copiedTooltipText = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copiedTooltipText,
    wrapperCustomClassNames = [],
    titleCustomClassNames = [],
    contentCustomClassNames = [],
    copyTooltipCustomClassNames = [],
    order = "vertical",
    addDateInUrl = true
  } = _ref;
  const [copyTooltipText, setCopyTooltipText] = (0, _react.useState)(copyActionTooltipText);
  const formatedEvent = _objectSpread(_objectSpread({}, event), {}, {
    end: getOrigEndDate(event.allDay, event.end, event.start)
  });
  if (hideAddToIcons && (hideShareIcons || !hideShareIcons && +formatedEvent.kind === 4)) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.add_share_icons_block, _mainModule.default[order], ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _commons.combineClassNames)([titleBorderHidden ? "" : _mainModule.default.bordered, ...titleCustomClassNames])
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default[order], ...contentCustomClassNames])
  }, !hideAddToIcons && /*#__PURE__*/_react.default.createElement(AddShareIconsRow, {
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS,
    sectionName: addToSectionName,
    event: formatedEvent,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId,
    instanceShort: instanceShort
  }), !hideShareIcons && ![4, 5].includes(+formatedEvent.kind) && /*#__PURE__*/_react.default.createElement(AddShareIconsRow, {
    sectionName: shareSectionName,
    event: formatedEvent,
    boomEventUrlBase: boomEventUrlBase,
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.rowId,
    copyTooltipText: copyTooltipText,
    setCopyTooltipText: setCopyTooltipText,
    copiedTooltipText: copiedTooltipText,
    copyActionTooltipText: copyActionTooltipText,
    copyTooltipCustomClassNames: copyTooltipCustomClassNames,
    addDateInUrl: addDateInUrl
  })));
}
const AddShareIconsRow = /*#__PURE__*/(0, _react.memo)(_ref2 => {
  let {
    instanceShort,
    constructor,
    rowId,
    sectionName,
    event,
    setCopyTooltipText,
    boomEventUrlBase,
    copiedTooltipText,
    copyTooltipText,
    copyActionTooltipText,
    copyTooltipCustomClassNames,
    addDateInUrl
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.add_share_icons_row
  }, /*#__PURE__*/_react.default.createElement("div", null, sectionName), /*#__PURE__*/_react.default.createElement("div", null, constructor.icons.map(btn => {
    const isCopyLink = btn.type === "copyLink";
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: "".concat(event.id, "-").concat(event.start, "-add-share-").concat(btn.type)
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _commons.combineClassNames)(["icon-" + btn.type, isCopyLink ? _mainModule.default.hoverable : ""]),
      onMouseOut: () => isCopyLink && setTimeout(() => setCopyTooltipText(copyActionTooltipText), 300),
      onClick: e => {
        if (rowId === 1) return btn.clickHandler(e, btn.type, event, instanceShort);
        if (rowId === 2) {
          const eventUrl = (0, _addShare.generateEventUrl)(event, boomEventUrlBase, isCopyLink ? addDateInUrl : true, [event.start, event.end, +event.all_day], isCopyLink);
          if (isCopyLink) {
            btn.clickHandler(e, setCopyTooltipText, copiedTooltipText, eventUrl);
          } else {
            btn.clickHandler(e, btn.type, eventUrl);
          }
        }
      }
    }), isCopyLink && /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _commons.combineClassNames)([_mainModule.default.copy_tooltip, ...copyTooltipCustomClassNames])
    }, copyTooltipText));
  })));
});
AddShareIcons.propTypes = {
  title: _propTypes.default.string,
  comp_id: _propTypes.default.string.isRequired,
  instance: _propTypes.default.string.isRequired,
  instanceShort: _propTypes.default.string,
  titleBorderHidden: _propTypes.default.bool,
  event: _propTypes.default.object.isRequired,
  boomEventUrlBase: _propTypes.default.string.isRequired,
  hideAddToIcons: _propTypes.default.bool,
  addToSectionName: _propTypes.default.string,
  hideShareIcons: _propTypes.default.bool,
  shareSectionName: _propTypes.default.string,
  copyActionTooltipText: _propTypes.default.string,
  copiedTooltipText: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  titleCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  contentCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  copyTooltipCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  order: _propTypes.default.oneOf(["vertical", "horizontal"]),
  addDateInUrl: _propTypes.default.bool
};