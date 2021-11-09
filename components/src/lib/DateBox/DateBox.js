import React, { memo } from 'react'
import styles from './main.module.css'
import PropTypes from 'prop-types'
import { getDayOfMonth } from '../helpers/dateBox'
import { combineClassNames } from '../helpers/commons'

const DateBox = ({ start, end, locale, wrapperCustomClassNames = [], direction = 'row' }) => {
  const {
    currentDay,
    isUpcoming,
    eventStartDay,
    dayOfWeek,
    month
  } = getDayOfMonth(start, end, locale)

  return (
    <div className={combineClassNames([styles.container, styles[direction], ...wrapperCustomClassNames])}>
      <div className={styles.day_of_month}>
        <p>{isUpcoming ? currentDay : eventStartDay}</p>
      </div>
      <div className={styles.month_day_of_week_parent}>
        <div className={styles.month}>
          <p>{dayOfWeek}</p>
        </div>
        <div className={styles.day_of_week}>
          <p>{month}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(DateBox)

DateBox.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  locale: PropTypes.string,
  wrapperCustomClassNames: PropTypes.array
}
