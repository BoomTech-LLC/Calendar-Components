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

  return (
    <div className={combineClassNames([styles.location_parent, ...wrapperCustomClassNames])} >
      {showIcon && <div className={styles.icon + " icon-Location"} />}
      <a 
        href={disabled ? undefined : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
        target="_blank" 
        className={oneLine ? styles.oneLine : undefined} 
        onClick={e => disabled && e.preventDefault()}>
        {address}
      </a>
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