import React, { memo } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { combineClassNames, isDefined } from '../helpers/commons'
import { NameIcon, EmailIcon, WebsiteIcon, PhoneIcon } from './icons'

const ListedDetailsTemplate = {
  name: {
    icon: <NameIcon />,
  },
  phone: {
    preposition: 'tel:',
    icon: <PhoneIcon />,
  },
  email: {
    preposition: 'mailto:',
    icon: <EmailIcon />,
  },
  website: {
    preposition: '',
    icon: <WebsiteIcon />,
  },
}

const ListedDetails = ({id, values, title, titleBorderHidden = false, wrapperCustomClassNames = [], rowCustomClassNames = []}) => {
  
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
      {template.icon}
      {
        !isDefined(template.preposition) ?
        <span>{value}</span> : 
        <a 
          target='_blank' 
          href={template.preposition + value}
          rel="noreferrer"
        >
          {value}
        </a>
      }
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