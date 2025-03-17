import React from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { getGuestLimitProperties } from "./../helpers/guestLimit";
import { combineClassNames } from "./../helpers/commons";

const RegistrationButton = ({
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
  addDateInUrl = true,
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
      timeZone,
      convertDate,
      addDateInUrl,
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
      onClick={(e) => {
        if (!isButtonDisabled) {
          e.stopPropagation();
          const url = specialButtonUrl || page_url;
          if (url) {
            window.open(url, buttonLinkTarget);
          }
          onClickCallback();
        }
      }}
    >
      {specialButtonText || buttonText}
    </button>
  );
};

RegistrationButton.propTypes = {
  wrapperCustomClassNames: PropTypes.array,
  text: PropTypes.string,
  onClickCallback: PropTypes.func,
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
  addDateInUrl: PropTypes.bool,
};

export default RegistrationButton;
