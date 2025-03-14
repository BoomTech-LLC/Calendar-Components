"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRegistrationProperties = exports.getGuestsCount = exports.getGuestLimitProperties = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
var _commons = require("./commons");
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _dateBox = require("./dateBox");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const findAddon = (addons, addonName) => addons === null || addons === void 0 ? void 0 : addons.find(_ref => {
  let {
    name
  } = _ref;
  return addonName === name;
});
const getRegistrationProperties = _ref2 => {
  let {
    addons,
    eventRegistration,
    eventKind,
    planGuestLimit
  } = _ref2;
  const registration_addon = findAddon(addons, 'registration');
  if (!registration_addon || eventKind === 4) return null;
  let registration_properties = {};
  if (eventKind === 4) {
    if (eventRegistration) {
      registration_properties = eventRegistration;
    }
  } else {
    var _registration_addon$v, _registration$general, _eventRegistration$va, _eventRegistration$va2, _registration_addon$v2;
    const registration = (eventRegistration === null || eventRegistration === void 0 ? void 0 : eventRegistration.value) || (registration_addon === null || registration_addon === void 0 || (_registration_addon$v = registration_addon.value) === null || _registration_addon$v === void 0 ? void 0 : _registration_addon$v.registration) || (registration_addon === null || registration_addon === void 0 ? void 0 : registration_addon.value);
    if ((registration === null || registration === void 0 || (_registration$general = registration.general) === null || _registration$general === void 0 ? void 0 : _registration$general.limit) === 0) {
      registration.general.limit = planGuestLimit || 500;
    }
    const {
      texts,
      general,
      open
    } = registration;
    const {
      page_url,
      site_type,
      limit,
      limit_type,
      hide_reg_button
    } = general;
    registration_properties.registration_enabled = open;
    registration_properties.page_url = page_url;
    registration_properties.site_type = site_type;
    registration_properties.rsvp = texts.rsvp;
    registration_properties.guest_limit = limit;
    registration_properties.guest_limit_type = limit_type;
    registration_properties.hide_reg_button = !!hide_reg_button;
    registration_properties.show_guest_limit = (_eventRegistration$va = eventRegistration === null || eventRegistration === void 0 || (_eventRegistration$va2 = eventRegistration.value) === null || _eventRegistration$va2 === void 0 || (_eventRegistration$va2 = _eventRegistration$va2.general) === null || _eventRegistration$va2 === void 0 ? void 0 : _eventRegistration$va2.show_guest) !== null && _eventRegistration$va !== void 0 ? _eventRegistration$va : registration_addon === null || registration_addon === void 0 || (_registration_addon$v2 = registration_addon.value) === null || _registration_addon$v2 === void 0 || (_registration_addon$v2 = _registration_addon$v2.registration) === null || _registration_addon$v2 === void 0 || (_registration_addon$v2 = _registration_addon$v2.general) === null || _registration_addon$v2 === void 0 ? void 0 : _registration_addon$v2.show_guest;
  }
  return registration_properties;
};
exports.getRegistrationProperties = getRegistrationProperties;
const getGuestLimitProperties = props => {
  const {
    eventKind,
    eventPageUrl,
    planGuestLimit = 0,
    eventEndDate,
    addons,
    eventTicket,
    guests,
    eventStartDate,
    eventId = '',
    registrationPageUrl = '',
    text,
    allDay,
    timeZone,
    convertDate,
    addDateInUrl
  } = props;
  const button_properties = {};
  const registration = getRegistrationProperties(props);
  if (!registration || eventKind === 5) return {};
  if (eventKind === 4) {
    if (registration) {
      const {
        status,
        external
      } = registration;
      if (!status) {
        // In case of registration url as an external link from EventBrite or Wix
        if (typeof registration === 'string') {
          button_properties.showButton = true;
          button_properties.buttonText = text;
          button_properties.page_url = registration;
        }
      } else {
        if (['NA_REGISTRATION_STATUS', 'CLOSED', 'CLOSED_MANUALLY'].includes(status)) {
          button_properties.showButton = false;
        } else {
          button_properties.showButton = true;
          button_properties.buttonText = text;
          button_properties.page_url = status === 'OPEN_EXTERNAL' ? external.registration : eventPageUrl + '/form';
        }
      }
    }
  } else {
    const {
      registration_enabled,
      page_url,
      rsvp,
      site_type
    } = registration;
    if (registration_enabled) {
      button_properties.showButton = true;
      button_properties.buttonText = rsvp === 'Register' ? text : rsvp;
      if (page_url && site_type === 2) {
        button_properties.page_url = page_url;
      } else {
        button_properties.page_url = "".concat(registrationPageUrl).concat((0, _commons.encodeId)(String(eventId))).concat(addDateInUrl ? "?date=".concat(eventStartDate, ",").concat(eventEndDate, ",").concat(+allDay) : '');
      }
    }
  }
  const format = allDay ? 'YYYY-MM-DD' : 'YYYY-MM-DD[T]HH:mm:ss';
  if ((0, _momentTimezone.default)(eventEndDate.replace('T', ' ')).isBefore((0, _momentTimezone.default)((0, _momentTimezone.default)().format(format)))) {
    button_properties.showButton = false;
  }
  const ticket_addon = findAddon(addons, 'ticket');
  const {
    value: ticket
  } = eventTicket || ticket_addon || {};
  const guest_limit_properties = {
    guest_limit: 0,
    show_guest_limit: true
  };
  if (ticket_addon && ticket !== null && ticket !== void 0 && ticket.general.open) {
    var _ticket$fields;
    if (!ticket.general.showTicketLimit) guest_limit_properties.show_guest_limit = false;
    ticket === null || ticket === void 0 || (_ticket$fields = ticket.fields) === null || _ticket$fields === void 0 || _ticket$fields.forEach(_ref3 => {
      let {
        limitNumber,
        limit
      } = _ref3;
      if (limit) guest_limit_properties.show_guest_limit = false;
      if (typeof guest_limit_properties.guest_limit === 'string') return;
      guest_limit_properties.guest_limit = limit ? 'unlimited' : guest_limit_properties.guest_limit + limitNumber;
    });
  } else {
    guest_limit_properties.show_guest_limit = button_properties.showButton && registration.registration_enabled && registration.guest_limit_type !== 'unlimited' && registration.show_guest_limit && eventKind !== 4 && registration.site_type === 1;
    guest_limit_properties.guest_limit = registration ? registration.guest_limit_type !== 'unlimited' ? planGuestLimit !== 0 ? Math.min(+registration.guest_limit, planGuestLimit) : +registration.guest_limit : 'unlimited' : null;
  }
  if (registration.hide_reg_button && eventKind === 1 && button_properties.showButton) {
    const showButton = (0, _dateBox.isRegistrationClosed)(timeZone, eventStartDate, convertDate, allDay);
    button_properties.showButton = !showButton;
  }
  return _objectSpread(_objectSpread(_objectSpread({}, button_properties), guest_limit_properties), {}, {
    guestsCount: getGuestsCount(addons, eventTicket, guests, eventStartDate)
  });
};
exports.getGuestLimitProperties = getGuestLimitProperties;
const getGuestsCount = exports.getGuestsCount = function getGuestsCount(addons, eventTicket) {
  let guests = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let startDate = arguments.length > 3 ? arguments[3] : undefined;
  const ticket_addon = findAddon(addons, 'ticket');
  const ticketAddonEnabled = ticket_addon && ticket_addon.value.general.open;
  let allGuests = [];
  const formats = ['YYYY-MM-DD', 'YYYY-MM-DD[T]HH:mm'];
  const compareDates = _ref4 => {
    let {
      guestDate,
      guestId
    } = _ref4;
    // LAST GUEST ID BEFORE ADDING ADDITIONAL DATES
    if (guestId < 80420) {
      return (0, _momentTimezone.default)(guestDate).format(formats[0]) === (0, _momentTimezone.default)(startDate).format(formats[0]);
    } else {
      return (0, _momentTimezone.default)(guestDate).format(formats[+guestDate.includes('T')]) === (0, _momentTimezone.default)(startDate).format(formats[+startDate.includes('T')]);
    }
  };
  if (typeof guests === 'number') {
    allGuests = guests;
  } else {
    Array.isArray(guests) && guests.forEach(guest => {
      if (guest.date && compareDates({
        guestDate: guest.date,
        guestId: guest.id
      })) {
        allGuests.push(guest);
      }
    });
  }
  let soldTicketsCount = 0;
  if (ticket_addon && !eventTicket && ticketAddonEnabled || eventTicket && eventTicket.value.general.open) {
    Array.isArray(guests) && guests.forEach(_ref5 => {
      let {
        date,
        sold_tickets,
        id
      } = _ref5;
      if (sold_tickets && sold_tickets.length && (!date || compareDates({
        guestDate: date,
        guestId: id
      }))) {
        soldTicketsCount += +sold_tickets.length;
      }
    });
  } else {
    soldTicketsCount = allGuests.length;
  }
  return soldTicketsCount || 0;
};