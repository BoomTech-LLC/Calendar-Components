"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _guestLimit = require("./../helpers/guestLimit");

var _commons = require("./../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GuestLimit = props => {
  const {
    show_guest_limit,
    guest_limit,
    guestsCount
  } = (0, _guestLimit.getGuestLimitProperties)(props);
  if (!show_guest_limit) return null;
  const {
    wrapperCustomClassNames = []
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.guest_limit_parent, ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("p", null, "Guest limit: ", guestsCount, "/", guest_limit));
};

GuestLimit.propTypes = {
  addons: _propTypes.default.array.isRequired,
  eventRegistration: _propTypes.default.object,
  eventTicket: _propTypes.default.object,
  eventKind: _propTypes.default.number,
  eventStartDate: _propTypes.default.string.isRequired,
  repeat: _propTypes.default.object.isRequired,
  guests: _propTypes.default.array.isRequired,
  wrapperCustomClassNames: _propTypes.default.array,
  plan: _propTypes.default.string.isRequired
};
var _default = GuestLimit;
exports.default = _default;