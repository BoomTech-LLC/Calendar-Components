import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from '../helpers/commons'
import LocationIcon from './icons/location'

const Location = ({
  wrapperCustomClassNames = [],
  address,
  disabled = false,
  showIcon = true
}) => {
  if(!address) return null

  const redirectToGoogleMaps = () => {
    !disabled && window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')
  }

  return (
    <div className={combineClassNames([styles.location_parent, ...wrapperCustomClassNames])} onClick={redirectToGoogleMaps}>
      {showIcon && <div><LocationIcon/></div>}
      <p>
        {address}
      </p>
    </div>
  )
}

Location.propTypes = {
  address: PropTypes.string.isRequired,
  wrapperCustomClassNames: PropTypes.array,
  disabled: PropTypes.bool,
  showIcon: PropTypes.bool
}

export default Location