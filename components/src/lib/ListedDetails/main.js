import React, { memo } from 'react'
import styles from './main.module.css'
import '../icons.css'
import PropTypes from 'prop-types'
import { combineClassNames, isDefined, isObjectEmpty } from '../helpers/commons'
import { LISTED_DETAILS_CONSTRUCTOR } from '../helpers/constants'

const ListedDetails = ({id, values, title = '', titleBorderHidden = false, wrapperCustomClassNames = [], rowCustomClassNames = []}) => {
  
  if(isObjectEmpty(values)) return null

  return (
    <div className={combineClassNames([styles.listed_details_block, ...wrapperCustomClassNames])} >
      <h3 className={titleBorderHidden ? '' : styles.bordered}>{title}</h3>
      {Object.entries(values).map(value => {
        return <DetailsItem 
                  key={`listed-details-${id}-${value[0]}}`}
                  data={value}
                  rowCustomClassNames={rowCustomClassNames}
                />
      })}
    </div>
  )
}

const DetailsItem = ({data, rowCustomClassNames}) => {
  
  if(!data || !data[1]) return null

  const [key, value] = data
  const template = LISTED_DETAILS_CONSTRUCTOR[key]

  if(!template) return null

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
  rowCustomClassNames: PropTypes.arrayOf(PropTypes.string)
}

export default memo(ListedDetails)