import React from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { getGuestLimitProperties } from "./../helpers/guestLimit";
import { combineClassNames } from "./../helpers/commons";

const RegistrationButton = ({
  wrapperCustomClassNames = [],
  onClick = (url, buttonLinkTarget) =>
    url && window.open(url, buttonLinkTarget),
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
}) => {
  const { showButton, buttonText, page_url, guest_limit, guestsCount } =
    getGuestLimitProperties({
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
    });

  if (!alwaysShowButton && !showButton) return null;

  const isButtonDisabled = guestsCount >= guest_limit || disableButton;

  return (
    <button
      className={combineClassNames([
        styles.register_button,
        ...wrapperCustomClassNames,
      ])}
      style={{ opacity: isButtonDisabled ? 0.4 : 1 }}
      onClick={() =>
        isButtonDisabled ? null : onClick(page_url, buttonLinkTarget)
      }>
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
};

export default RegistrationButton;
