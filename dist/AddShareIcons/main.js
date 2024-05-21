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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
    order = "vertical"
  } = _ref;
  const [copyTooltipText, setCopyTooltipText] = (0, _react.useState)(copyActionTooltipText);
  if (hideAddToIcons && (hideShareIcons || !hideShareIcons && +event.kind === 4)) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.add_share_icons_block, _mainModule.default[order], ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _commons.combineClassNames)([titleBorderHidden ? "" : _mainModule.default.bordered, ...titleCustomClassNames])
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default[order], ...contentCustomClassNames])
  }, !hideAddToIcons && /*#__PURE__*/_react.default.createElement(AddShareIconsRow, {
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS,
    sectionName: addToSectionName,
    event: event,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId,
    instanceShort: instanceShort
  }), !hideShareIcons && ![4, 5].includes(+event.kind) && /*#__PURE__*/_react.default.createElement(AddShareIconsRow, {
    sectionName: shareSectionName,
    event: event,
    boomEventUrlBase: boomEventUrlBase,
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.rowId,
    copyTooltipText: copyTooltipText,
    setCopyTooltipText: setCopyTooltipText,
    copiedTooltipText: copiedTooltipText,
    copyActionTooltipText: copyActionTooltipText,
    copyTooltipCustomClassNames: copyTooltipCustomClassNames
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
    copyTooltipCustomClassNames
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
          const eventUrl = (0, _addShare.generateEventUrl)(event, boomEventUrlBase);
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
  order: _propTypes.default.oneOf(["vertical", "horizontal"])
};