"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _guestLimit = require("./../helpers/guestLimit");
var _commons = require("./../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RegistrationButton = _ref => {
  let {
    wrapperCustomClassNames = [],
    onClickCallback = () => {},
    eventRegistration,
    eventTicket,
    addons = [],
    eventKind = 1,
    eventPageUrl = "",
    eventEndDate,
    eventStartDate,
    planGuestLimit = 0,
    repeat,
    guests,
    eventId,
    registrationPageUrl,
    text = "Register",
    allDay = true,
    disableButton = false,
    buttonLinkTarget = "_blank",
    alwaysShowButton = false,
    specialButtonText = null,
    specialButtonUrl = null,
    timeZone,
    convertDate,
    addDateInUrl = true
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
    planGuestLimit,
    repeat,
    guests,
    eventStartDate,
    eventId,
    registrationPageUrl,
    text,
    allDay,
    alwaysShowButton,
    timeZone,
    convertDate,
    addDateInUrl
  });
  if (!alwaysShowButton && !showButton) return null;
  const isButtonDisabled = guestsCount >= guest_limit || disableButton;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _commons.combineClassNames)([_mainModule.default.register_button, ...wrapperCustomClassNames]),
    style: {
      opacity: isButtonDisabled ? 0.4 : 1
    },
    onClick: e => {
      if (!isButtonDisabled) {
        e.stopPropagation();
        const url = specialButtonUrl || page_url;
        if (url) {
          window.open(url, buttonLinkTarget);
        }
        onClickCallback();
      }
    }
  }, specialButtonText || buttonText);
};
RegistrationButton.propTypes = {
  wrapperCustomClassNames: _propTypes.default.array,
  text: _propTypes.default.string,
  onClickCallback: _propTypes.default.func,
  addons: _propTypes.default.array.isRequired,
  eventKind: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  eventRegistration: _propTypes.default.object,
  eventPageUrl: _propTypes.default.string,
  planGuestLimit: _propTypes.default.number,
  eventEndDate: _propTypes.default.string.isRequired,
  eventStartDate: _propTypes.default.string.isRequired,
  repeat: _propTypes.default.object.isRequired,
  guests: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.number]).isRequired,
  comp_id: _propTypes.default.string.isRequired,
  instance: _propTypes.default.string.isRequired,
  eventId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  registrationPageUrl: _propTypes.default.string.isRequired,
  timeZone: _propTypes.default.string,
  allDay: _propTypes.default.bool.isRequired,
  addDateInUrl: _propTypes.default.bool
};
var _default = exports.default = RegistrationButton;