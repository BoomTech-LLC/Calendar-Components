export const getDayOfMonth = (start, end, locale) => {
    const [startDate] = start.split('T')
    const [endDate] = end.split('T')
    const currentDate = moment().format('YYYY-MM-DD')
    const isUpcoming =
      moment(startDate).isSameOrBefore(currentDate) &&
      moment(endDate).isSameOrAfter(currentDate)
  
    return {
      currentDay: moment().locale(locale).format('DD'),
      eventStartDay: moment(startDate).locale(locale).format('DD'),
      dayOfWeek: moment(startDate).locale(locale).format('dddd'),
      month: moment(startDate).locale(locale).format('MMMM'),
      isUpcoming
    }
  }
  
  const getFormattedDate = (date, dateFormat, locale) => {
    let format = dateFormat
    if (
      dateFormat.includes('YYYY') &&
      moment(date).format('YYYY') === moment().format('YYYY')
    ) {
      const yearRegex = new RegExp(',? ?,?YYYY,? ?,?')
      format = dateFormat.split(yearRegex)[1]
        ? dateFormat.replace(/,? ?,?YYYY/, '').trim()
        : dateFormat.replace(yearRegex, '').trim()
    }
  
    return moment(date).locale(locale).format(format)
  }
  
  export const formatDate = (start, end, dateFormat, locale) => ({
    startDate: getFormattedDate(start.replace('T', ' '), dateFormat, locale),
    endDate: getFormattedDate(end.replace('T', ' '), dateFormat, locale)
  })
  
  export const formatTime = (start, end, timeFormat, all_day, locale) => {
    const format = timeFormat.toLowerCase() === 'am/pm' ? ' hh:mm a' : ' HH:mm'
    return {
      startTime: all_day
        ? ''
        : moment(start.replace('T', ' ')).locale(locale).format(format),
      endTime: all_day
        ? ''
        : moment(end.replace('T', ' ')).locale(locale).format(format)
    }
  }
  