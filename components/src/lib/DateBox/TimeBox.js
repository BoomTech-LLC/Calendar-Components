import React from 'react'
import styles from './main.module.css'
import PropTypes from 'prop-types'
import { formatDate, formatTime } from '../helpers/dateBox'
import { combineClassNames } from '../helpers/commons'
import StartDateIcon from './images/start'
import EndDateIcon from './images/end'
import CalendarIcon from './images/calendar'

export const TimeBox = ({
  start,
  end,
  showIcons,
  locale,
  dateFormat,
  timeFormat,
  all_day,
  timeZone,
  wrapperCustomClassNames = [],
  agenda,
  allDayText
}) => {
  const { startDate, endDate } = formatDate(start, end, dateFormat, locale)
  const { startTime, endTime } = formatTime(
    start,
    end,
    timeFormat,
    all_day,
    locale
  )
  const timeZoneToShow = all_day ? '' : timeZone
  const datesEqual = startDate === endDate

  if (datesEqual && all_day && agenda) {
    return (
      <div className={combineClassNames([styles.all_day_text_parent, ...wrapperCustomClassNames])}>
        <p className='all_day_text'>{allDayText}</p>
      </div>
    )
  }

  return (
    <div className={combineClassNames(wrapperCustomClassNames)}>
      {!(datesEqual && agenda) &&
        <div className={styles.two_line_start}>
          {showIcons && 
            <div>
              {datesEqual ? <CalendarIcon/> : <StartDateIcon/>}
            </div>
          }
          <p>
            {startDate + (datesEqual ? '' : startTime + ' ' + timeZoneToShow)}
          </p>
        </div>
      }

      {!(datesEqual && all_day) &&
        <div className={styles.two_line_end}>
          {showIcons && 
            <div>
              {datesEqual ? <StartDateIcon/> : <EndDateIcon/>}
            </div>
          }
          <p>
            {!datesEqual
              ? endDate + endTime + ' ' + timeZoneToShow
              : startTime.trim() + ' -' + endTime + ' ' + timeZoneToShow}
          </p>
        </div>
      }
    </div>
  )
}

TimeBox.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  showIcons: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array
}
