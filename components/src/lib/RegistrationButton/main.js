import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { getGuestLimitProperties } from './../helpers/guestLimit'
import { combineClassNames } from './../helpers/commons'

const RegistrationButton = ({
  wrapperCustomClassNames = [],
  onClick = (url) => url && window.open(url, '_blank'),
  eventRegistration,
  eventTicket,
  addons = [],
  eventKind = 1,
  eventPageUrl = '',
  eventEndDate,
  eventStartDate,
  planGuestLimit,
  repeat,
  guests,
  comp_id,
  instance,
  eventId,
  registrationPageUrl
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
      comp_id,
      instance,
      eventId,
      registrationPageUrl
    })

  if (!showButton) return null

  return (
    <div
      className={combineClassNames([styles.register_button, ...wrapperCustomClassNames])}
      style={{opacity: guestsCount >= guest_limit ? 0.4 : 1}}
      onClick={() => (guestsCount >= guest_limit ? null : onClick(page_url))}
    >
      <p>{buttonText}</p>
    </div>
  )
}

RegistrationButton.propTypes = {
  wrapperCustomClassNames: PropTypes.array,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  eventRegistration: PropTypes.object,
  addons: PropTypes.array.isRequired,
  eventKind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  eventPageUrl: PropTypes.string,
  eventEndDate: PropTypes.string.isRequired,
  eventStartDate: PropTypes.string.isRequired,
  planGuestLimit: PropTypes.number.isRequired,
  repeat: PropTypes.object.isRequired,
  guests: PropTypes.array.isRequired,
  comp_id: PropTypes.string.isRequired,
  instance: PropTypes.string.isRequired,
  eventId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  registrationPageUrl: PropTypes.string.isRequired
}


export default RegistrationButton