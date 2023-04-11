import React from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { getGuestLimitProperties } from "./../helpers/guestLimit";
import { combineClassNames } from "./../helpers/commons";
import { formatDateByTimeZone } from "../helpers/dateBox";

const RegistrationButton = ({
  wrapperCustomClassNames = [],
  onClick = (url) => url && window.open(url, "_blank"),
  eventRegistration,
  eventTicket,
  addons = [],
  eventKind = 1,
  eventPageUrl = "",
  eventEndDate: _eventEndDate,
  eventStartDate: _eventStartDate,
  planGuestLimit = 0,
  repeat,
  guests,
  comp_id,
  instance,
  eventId,
  registrationPageUrl,
  text = "Register",
  timeZone = "",
  allDay = true,
  convertDate = false,
}) => {
  const { start, end } = formatDateByTimeZone({
    start: _eventStartDate,
    end: _eventEndDate,
    allDay,
    timeZone,
    convertDate,
  });

  const { showButton, buttonText, page_url, guest_limit, guestsCount } =
    getGuestLimitProperties({
      eventRegistration,
      eventTicket,
      addons,
      eventKind,
      eventPageUrl,
      eventEndDate: end,
      planGuestLimit,
      repeat,
      guests,
      eventStartDate: start,
      comp_id,
      instance,
      eventId,
      registrationPageUrl,
      text,
      allDay,
    });

  if (!showButton) return null;

  return (
    <button
      className={combineClassNames([
        styles.register_button,
        ...wrapperCustomClassNames,
      ])}
      style={{ opacity: guestsCount >= guest_limit ? 0.4 : 1 }}
      onClick={() => (guestsCount >= guest_limit ? null : onClick(page_url))}
    >
      {buttonText}
    </button>
  );
};

RegistrationButton.propTypes = {
  wrapperCustomClassNames: PropTypes.array,
  text: PropTypes.string,
  onClick: PropTypes.func,
  addons: PropTypes.array.isRequired,
  eventKind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  eventRegistration: PropTypes.object,
  eventPageUrl: PropTypes.string,
  planGuestLimit: PropTypes.number,
  eventEndDate: PropTypes.string.isRequired,
  eventStartDate: PropTypes.string.isRequired,
  repeat: PropTypes.object.isRequired,
  guests: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
  comp_id: PropTypes.string.isRequired,
  instance: PropTypes.string.isRequired,
  eventId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  registrationPageUrl: PropTypes.string.isRequired,
  timeZone: PropTypes.string,
  allDay: PropTypes.bool.isRequired,
  convertDate: PropTypes.bool.isRequired,
};

export default RegistrationButton;
