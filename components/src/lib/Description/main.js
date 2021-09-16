import React, { useMemo } from 'react'
import parse from 'html-react-parser';
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { combineClassNames } from '../helpers/commons'

const Description = ({ children, wrapperCustomClassNames = [] }) => {

  const descriptionNode = useMemo(() => parse(children), [children]);
  
  if(!children) return null;

  return (
    <div className={combineClassNames([styles.description, ...wrapperCustomClassNames])}>
      {descriptionNode}
    </div>
  )
}

Description.propTypes = {
  children: PropTypes.string,
  customClassNames: PropTypes.arrayOf(PropTypes.string)
}

export default Description