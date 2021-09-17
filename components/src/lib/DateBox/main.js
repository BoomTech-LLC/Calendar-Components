import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from './Grid'
import { TwoLines } from './TwoLines'

const DateBox = ({
  start,
  end,
  locale = 'en',
  showIcons = true,
  dateFormat = 'dddd, MMMM DD YYYY',
  timeFormat = 'am/pm',
  all_day = true,
  timeZone = '',
  parentClassName = '',
  agenda = false,
  type = 'twolines'
}) => {
  if (type === 'twolines') {
    return (
      <TwoLines
        start={start}
        end={end}
        locale={locale}
        showIcons={showIcons}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        all_day={all_day}
        timeZone={timeZone}
        parentClassName={parentClassName}
        agenda={agenda}
      />
    )
  }
  return (
    <Grid
      start={start}
      end={end}
      locale={locale}
      parentClassName={parentClassName}
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
  parentClassName: PropTypes.string
}

export default DateBox