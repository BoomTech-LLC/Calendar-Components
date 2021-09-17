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
  wrapperCustomClassNames = '',
  agenda = false,
  type = 'timeBox',
  allDayText = 'All Day'
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
      />
    )
  }
  return (
    <DateBoxComponent
      start={start}
      end={end}
      locale={locale}
      wrapperCustomClassNames={wrapperCustomClassNames}
    />
  )
}

DateBox.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  locale: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  all_day: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  timeZone: PropTypes.string,
  type: PropTypes.string,
  showIcons: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array
}

export default DateBox