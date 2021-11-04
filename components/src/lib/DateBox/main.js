import React from 'react'
import PropTypes from 'prop-types'
import { DateBox as DateBoxComponent } from './DateBox'
import { TimeBox } from './TimeBox'

const DateBox = ({
  start,
  end,
  locale = 'en',
  showIcons = true,
  dateFormat = 'dddd, MMMM DD YYYY',
  timeFormat = 'am/pm',
  all_day = true,
  timeZone = '',
  wrapperCustomClassNames = [],
  agenda = false,
  type = 'timeBox',
  allDayText = 'All Day',
  oneLine = false,
  direction = 'row',
  showYear = false,
  year = '',
}) => {
  if (type === 'timeBox') {
    return (
      <TimeBox
        start={start}
        end={end}
        locale={locale}
        showIcons={showIcons}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        all_day={all_day}
        timeZone={timeZone}
        wrapperCustomClassNames={wrapperCustomClassNames}
        agenda={agenda}
        allDayText={allDayText}
        oneLine={oneLine}
        showYear={showYear}
        year={year}
      />
    )
  }
  return (
    <DateBoxComponent
      start={start}
      end={end}
      locale={locale}
      wrapperCustomClassNames={wrapperCustomClassNames}
      direction={direction}
    />
  )
}

DateBox.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  year: PropTypes.string,
  locale: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  all_day: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  timeZone: PropTypes.string,
  type: PropTypes.string,
  showIcons: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array,
  oneLine: PropTypes.bool,
  direction: PropTypes.string,
  showYear: PropTypes.bool
}

export default DateBox