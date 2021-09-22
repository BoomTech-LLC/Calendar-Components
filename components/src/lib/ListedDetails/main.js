import React, { memo } from 'react'
import styles from './styles.module.css'
import './icons.css'
import PropTypes from 'prop-types'
import { combineClassNames, isDefined } from '../helpers/commons'

const ListedDetailsTemplate = {
  name: {
    iconClassName: 'icon-profile',
  },
  phone: {
    preposition: 'tel:',
    iconClassName: 'icon-Mobile',
  },
  email: {
    preposition: 'mailto:',
    iconClassName: 'icon-mail2',
  },
  website: {
    preposition: '',
    iconClassName: 'icon-earth',
  },
}

const ListedDetails = ({id, values, title, titleBorderHidden = false, wrapperCustomClassNames = [], rowCustomClassNames = []}) => {
  
  if(!Object.values(values).length) return null

  return (
    <div className={combineClassNames([styles.listedDetailsBlock, ...wrapperCustomClassNames])} >
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
  const template = ListedDetailsTemplate[key]

  if(!template) return null

  return (
    <div className={combineClassNames([styles.listedDetailsRow, ...rowCustomClassNames])}>
      <div className={template.iconClassName}></div>
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
  title: PropTypes.string.isRequired,
  titleBorderHidden: PropTypes.bool,
  values: PropTypes.object.isRequired,
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  rowCustomClassNames: PropTypes.arrayOf(PropTypes.string)
}

export default memo(ListedDetails)