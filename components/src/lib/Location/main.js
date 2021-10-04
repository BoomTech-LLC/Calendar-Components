import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from '../helpers/commons'

const Location = ({
  wrapperCustomClassNames = [],
  address,
  disabled = false,
  showIcon = true,
  oneLine = false
}) => {
  if(!address) return null

  const redirectToGoogleMaps = () => {
    !disabled && window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')
  }

  return (
    <div className={combineClassNames([styles.location_parent, ...wrapperCustomClassNames])} onClick={redirectToGoogleMaps}>
      {showIcon && <div className={styles.icon + " icon-Location"} />}
      <p className={oneLine ? styles.oneLine : undefined}>
        {address}
      </p>
    </div>
  )
}

Location.propTypes = {
  address: PropTypes.string.isRequired,
  wrapperCustomClassNames: PropTypes.array,
  disabled: PropTypes.bool,
  showIcon: PropTypes.bool,
  oneLine: PropTypes.bool
}

export default Location