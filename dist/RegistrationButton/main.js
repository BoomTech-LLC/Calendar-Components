"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RegistrationButton = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

var _guestLimit = require("./../helpers/guestLimit");

var _commons = require("./../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RegistrationButton = _ref => {
  let {
    wrapperCustomClassNames = [],
    onClick: _onClick = url => url && window.open(url, '_blank'),
    eventRegistration,
    eventTicket,
    addons = [],
    eventKind = 1,
    eventPageUrl = '',
    eventEndDate,
    eventStartDate,
    plan,
    repeat,
    guests,
    comp_id,
    instance,
    eventId,
    registrationPageUrl
  } = _ref;
  const {
    showButton,
    buttonText,
    page_url,
    guest_limit,
    guestsCount
  } = (0, _guestLimit.getGuestLimitProperties)({
    eventRegistration,
    eventTicket,
    addons,
    eventKind,
    eventPageUrl,
    eventEndDate,
    plan,
    repeat,
    guests,
    eventStartDate,
    comp_id,
    instance,
    eventId,
    registrationPageUrl
  });
  if (!showButton) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_stylesModule.default.register_button, ...wrapperCustomClassNames]),
    style: {
      opacity: guestsCount >= guest_limit ? 0.4 : 1
    },
    onClick: () => guestsCount >= guest_limit ? null : _onClick(page_url)
  }, /*#__PURE__*/_react.default.createElement("p", null, buttonText));
};

exports.RegistrationButton = RegistrationButton;
RegistrationButton.propTypes = {
  wrapperCustomClassNames: _propTypes.default.array,
  buttonText: _propTypes.default.string,
  onClick: _propTypes.default.func,
  eventRegistration: _propTypes.default.object,
  addons: _propTypes.default.array.isRequired,
  eventKind: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  eventPageUrl: _propTypes.default.string,
  eventEndDate: _propTypes.default.string.isRequired,
  eventStartDate: _propTypes.default.string.isRequired,
  plan: _propTypes.default.string.isRequired,
  repeat: _propTypes.default.object.isRequired,
  guests: _propTypes.default.array.isRequired,
  comp_id: _propTypes.default.string.isRequired,
  instance: _propTypes.default.string.isRequired,
  eventId: _propTypes.default.string.isRequired,
  registrationPageUrl: _propTypes.default.string.isRequired
};
var _default = RegistrationButton;
exports.default = _default;