import React from 'react'
import s from './styles.module.css'
import PropTypes from 'prop-types'
import { combineClassNames } from '../helpers/commons'

const Description = ({ children, customClassNames = [] }) => {
  return (
    <div className={combineClassNames([s.description, ...customClassNames])}>
      <p>{children}</p>
    </div>
  )
}

Description.propTypes = {
  children: PropTypes.node,
  customClassNames: PropTypes.arrayOf(PropTypes.string)
}

export default Description