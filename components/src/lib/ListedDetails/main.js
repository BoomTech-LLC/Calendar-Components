import React, { memo } from 'react'
import styles from './main.module.css'
import '../icons.css'
import PropTypes from 'prop-types'
import { combineClassNames, isDefined, isObjectEmpty, stopPropagation } from '../helpers/commons'
import { LISTED_DETAILS_CONSTRUCTOR } from '../helpers/constants'
import Location from './../Location'

const ListedDetails = ({
    id,
    values,
    title = '',
    titleBorderHidden = false,
    wrapperCustomClassNames = [],
    textDetailsCustomClassNames = [],
    linkDetailsCustomClassNames = []
  }) => {
  const hasAcceptableValues = Object.entries(values).some(([key, value]) => LISTED_DETAILS_CONSTRUCTOR[key] && value);
  
  if(isObjectEmpty(values) || !hasAcceptableValues) return null

  return (
    <div className={combineClassNames([styles.listed_details_block, ...wrapperCustomClassNames])}>
      <h3 className={titleBorderHidden ? '' : styles.bordered}>{title}</h3>
      {Object.entries(values).map(val => {

        const itemKey = `listed-details-${id}-${val[0]}}`;
        if(val[0] === 'location') return (
          <Location
            key={itemKey}
            wrapperCustomClassNames={linkDetailsCustomClassNames}
            {...val[1]} 
          />
        )

        let [key, value] = val
        if(!value) return null
        
        const template = LISTED_DETAILS_CONSTRUCTOR[key]
        if(!template) return null
        if(template.validate) value = template.validate(value)

        return (
          <DetailsItem 
            key={itemKey}
            value={value}
            template={template}
            rowCustomClassNames={isDefined(template.preposition) ? linkDetailsCustomClassNames : textDetailsCustomClassNames}
          />
        )
      })}
    </div>
  )
}

const DetailsItem = ({value, template, rowCustomClassNames}) => {

  return (
    <div className={combineClassNames([styles.listed_details_row, ...rowCustomClassNames])}>
      <div className={'icon-' + template.iconName}></div>
      <div>
        {
          !isDefined(template.preposition) ?
          <div>{value}</div> : 
          <a 
            target='_blank' 
            href={template.preposition + value}
            rel="noreferrer"
            onClick={stopPropagation}
          >
            {value}
          </a>
        }
      </div>
    </div>
  )
}

ListedDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  titleBorderHidden: PropTypes.bool,
  values: PropTypes.object.isRequired,
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  textDetailsCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  linkDetailsCustomClassNames: PropTypes.arrayOf(PropTypes.string)
}

export default memo(ListedDetails)