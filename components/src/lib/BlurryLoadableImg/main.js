import React, { memo, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { decreaseImgQuality, isImgCached, isImgDecreasable } from '../helpers/blurryLoadableImage'
import { combineClassNames } from '../helpers/commons'

const BlurryLoadableImg = ({url, color, title, wrapperCustomClassNames = [], imgCustomClassNames = []}) => {

  const [ isOrigLoaded, setIsOrigLoaded ] = useState(isImgCached(url))
  const wrapperClassNames = useMemo(() => combineClassNames([styles.imgWrapper, ...wrapperCustomClassNames]), [wrapperCustomClassNames])

  if(!url) {
    return <div className={wrapperClassNames} style={{backgroundColor: color}}></div>
  }

  return (
      <div className={wrapperClassNames}>
        {
          isImgDecreasable(url) &&
          !isOrigLoaded &&
          <img
            className={combineClassNames([styles.blurred, ...imgCustomClassNames])}
            src={ decreaseImgQuality(url) }
            title={ title }
            alt={ title }
          />
        }
        
        <img
          className={combineClassNames([...imgCustomClassNames, (!isImgDecreasable(url) || isOrigLoaded) ? styles.shown: styles.hidden])}
          onLoad={() => setIsOrigLoaded(true)}
          src={ url }
          title={ title }
          alt={ title }
        />

      </div>
  )
}

BlurryLoadableImg.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  imgCustomClassNames: PropTypes.arrayOf(PropTypes.string),
}

export default memo(BlurryLoadableImg)