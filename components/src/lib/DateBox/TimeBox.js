import React, { memo } from 'react'
import styles from './main.module.css'
import PropTypes from 'prop-types'
import { formatDate, formatTime } from '../helpers/dateBox'
import { combineClassNames } from '../helpers/commons'

const TimeBox = ({
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
  allDayText,
  oneLine,
  showYear,
  fixedHeight
}) => {

  const { startDate, endDate } = formatDate(start, end, dateFormat, locale, showYear, all_day)
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

  const showHiddenEndDate = datesEqual && all_day && fixedHeight;

  return (
    <div className={combineClassNames(wrapperCustomClassNames)}>
      {!(datesEqual && agenda) &&
        <div className={styles.two_line_start}>
          {
            showIcons && 
            <div className={datesEqual ? styles.calendar_icon + ' icon-calendar' : styles.start_date_icon + ' icon-clock'}/>
          }
          <p className={oneLine ? styles.oneLine : undefined}>
            {
              startDate + (datesEqual ? '' : startTime + ' ' + timeZoneToShow)
            }
          </p>
        </div>
      }

      {(!(datesEqual && all_day) || fixedHeight) &&
        <div className={combineClassNames([styles.two_line_end, showHiddenEndDate ? styles.hidden : ''])}>
          {
            showIcons && 
            <div className={(datesEqual ? styles.start_date_icon : '') + ' icon-clock'} />
          }
          <p className={oneLine ? styles.oneLine : null}>
          { 
            showHiddenEndDate ? 'hidden row' :
            !datesEqual ? 
            endDate + endTime + ' ' + timeZoneToShow : 
            (startTime.trim() + ' -' + endTime + ' ' + timeZoneToShow)
          }
          </p>
        </div>
      }
    </div>
  )
}

export default memo(TimeBox)

TimeBox.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  showIcons: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array,
  oneLine: PropTypes.bool,
  fixedHeight: PropTypes.bool
}
