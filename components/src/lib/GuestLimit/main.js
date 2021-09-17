import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { getGuestLimitProperties } from './../helpers/guestLimit'
import { combineClassNames } from './../helpers/commons'

const GuestLimit = (props) => {
  const { show_guest_limit, guest_limit, guestsCount } =
    getGuestLimitProperties(props)

  if (!show_guest_limit) return null

  const { wrapperCustomClassNames = [] } = props

  return (
    <div className={combineClassNames([styles.guest_limit_parent, ...wrapperCustomClassNames])}>
      <p>
        Guest limit: {guestsCount}/{guest_limit}
      </p>
    </div>
  )
}

GuestLimit.propTypes = {
  addons: PropTypes.array.isRequired,
  eventRegistration: PropTypes.object,
  eventTicket: PropTypes.object,
  eventKind: PropTypes.number,
  eventStartDate: PropTypes.string.isRequired,
  repeat: PropTypes.object.isRequired,
  guests: PropTypes.array.isRequired,
  wrapperCustomClassNames: PropTypes.array,
  plan: PropTypes.string.isRequired
}

export default GuestLimit