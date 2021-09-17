import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { getGuestLimitProperties } from './../helpers/guestLimit'
import { combineClassNames } from './../helpers/commons'

export const RegistrationButton = ({
  wrapperCustomClassNames = [],
  onClick = (url) => url && window.open(url, '_blank'),
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
}) => {
  const { showButton, buttonText, page_url, guest_limit, guestsCount } =
  getGuestLimitProperties({
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
  plan: PropTypes.string.isRequired,
  repeat: PropTypes.object.isRequired,
  guests: PropTypes.array.isRequired,
  comp_id: PropTypes.string.isRequired,
  instance: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  registrationPageUrl: PropTypes.string.isRequired
}


export default RegistrationButton