"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _commons = require("../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Title = _ref => {
  let {
    title,
    titleExtraLink,
    link,
    kind,
    id,
    addDateInUrl,
    dateParams,
    singleEventUrl
  } = _ref;
  if (kind != 1 && !titleExtraLink || link.type == 2) return title;
  let titleHref = '';
  if (titleExtraLink) {
    titleHref = titleExtraLink;
  } else {
    titleHref = (link === null || link === void 0 ? void 0 : link.url) || "".concat(singleEventUrl).concat((0, _commons.encodeId)("".concat(id))).concat(addDateInUrl ? "?date=".concat(dateParams.join(',')) : '');
  }
  return /*#__PURE__*/_react.default.createElement("a", {
    href: titleHref,
    target: "_blank",
    style: {
      all: 'unset',
      cursor: 'pointer'
    },
    onClick: e => {
      e.stopPropagation();
    }
  }, title);
};
Title.propTypes = {
  title: _propTypes.default.string,
  titleExtraLink: _propTypes.default.string,
  link: _propTypes.default.string,
  kind: _propTypes.default.string,
  id: _propTypes.default.string,
  addDateInUrl: _propTypes.default.string,
  dateParams: _propTypes.default.string,
  singleEventUrl: _propTypes.default.string
};
var _default = exports.default = Title;