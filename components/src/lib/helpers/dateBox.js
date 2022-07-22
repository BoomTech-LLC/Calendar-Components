export const getDateForDateBox = (start, end, locale) => {
    const [startDate] = start.split('T')
    const [endDate] = end.split('T')
    const currentDate = moment().format('YYYY-MM-DD')
    const isUpcoming =
      moment(startDate).isSameOrBefore(currentDate) &&
      moment(endDate).isSameOrAfter(currentDate)
  
    const dateToShow = isUpcoming ? undefined : startDate;

    return{
      day: moment(dateToShow).locale(locale).format('DD'),
      week: moment(dateToShow).locale(locale).format('dddd'),
      month: moment(dateToShow).locale(locale).format('MMMM'),
    }
  }
  
  const getFormattedDate = (date, dateFormat, locale, showYearAnyway) => {
     let format = dateFormat;

    if (
      dateFormat.includes('YYYY') && 
      !showYearAnyway &&
      moment(date).format('YYYY') === moment().format('YYYY')
    ) {
      const yearRegex = new RegExp(',? ?,?YYYY,? ?,?')
      format = dateFormat.split(yearRegex)[1]
        ? dateFormat.replace(/,? ?,?YYYY/, '').trim()
        : dateFormat.replace(yearRegex, '').trim()
    }

    return moment(date).locale(locale).format(format)
  }
  
  export const formatDate = (start, end, dateFormat, locale) => {
    const startDate = start.replace('T', ' ');
    const endDate = end.replace('T', ' ');
    const currentYear = moment().format('YYYY');
    const showYearAnyway = dateFormat.includes('YYYY') && (moment(startDate).format('YYYY') !== currentYear || moment(endDate).format('YYYY') !== currentYear)

    return {
      startDate: getFormattedDate(startDate, dateFormat, locale, showYearAnyway),
      endDate: getFormattedDate(endDate, dateFormat, locale, showYearAnyway)
    }
  }
 
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
  