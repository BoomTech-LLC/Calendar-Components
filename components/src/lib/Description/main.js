import React from 'react'
import parse from 'html-react-parser';
import s from './styles.module.css'
import PropTypes from 'prop-types'
import { combineClassNames } from '../helpers/commons'

const Description = ({ children, customClassNames = [] }) => {

  const descriptionNode = parse(children)

  return (
    <div className={combineClassNames([s.description, ...customClassNames])}>
      {descriptionNode}
    </div>
  )
}

Description.propTypes = {
  children: PropTypes.string,
  customClassNames: PropTypes.arrayOf(PropTypes.string)
}

export default Description