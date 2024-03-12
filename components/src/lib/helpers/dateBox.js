import moment from "moment-timezone";
import momenttimezone from "moment-timezone";

export const getDateForDateBox = (start, end, locale) => {
  const [startDate] = start.split("T");
  const [endDate] = end.split("T");
  const currentDate = momenttimezone().format("YYYY-MM-DD");
  const isUpcoming =
    momenttimezone(startDate).isSameOrBefore(currentDate) &&
    momenttimezone(endDate).isSameOrAfter(currentDate);

  const dateToShow = isUpcoming ? undefined : startDate;
  return {
    day: momenttimezone(dateToShow).locale(locale).format("DD"),
    week: momenttimezone(dateToShow).locale(locale).format("dddd"),
    month: momenttimezone(dateToShow).locale(locale).format("MMMM"),
  };
};

const getFormattedDate = (date, dateFormat, locale, showYearAnyway) => {
  let format = dateFormat;

  if (
    dateFormat.includes("YYYY") &&
    !showYearAnyway &&
    momenttimezone(date).format("YYYY") === momenttimezone().format("YYYY")
  ) {
    const yearRegex = new RegExp(",? ?,?YYYY,? ?,?");
    format = dateFormat.split(yearRegex)[1]
      ? dateFormat.replace(/,? ?,?YYYY/, "").trim()
      : dateFormat.replace(yearRegex, "").trim();
  }

  return momenttimezone(date).locale(locale).format(format);
};

export const formatDate = (start, end, dateFormat, locale) => {
  const startDate = start.replace("T", " ");
  const endDate = end.replace("T", " ");
  const showYearAnyway =
    dateFormat.includes("YYYY") && !isDatesInCurrentYear(startDate, endDate);

  return {
    startDate: getFormattedDate(startDate, dateFormat, locale, showYearAnyway),
    endDate: getFormattedDate(endDate, dateFormat, locale, showYearAnyway),
  };
};

export const formatTime = (start, end, timeFormat, all_day, locale) => {
  const format = timeFormat.toLowerCase() === "am/pm" ? " hh:mm a" : " HH:mm";
  return {
    startTime: all_day
      ? ""
      : momenttimezone(start.replace("T", " ")).locale(locale).format(format),
    endTime: all_day
      ? ""
      : momenttimezone(end.replace("T", " ")).locale(locale).format(format),
  };
};

export const isDatesInCurrentYear = (start, end) => {
  const currentYear = momenttimezone().format("YYYY");
  const dates = [
    momenttimezone(start.replace("T", " ")).format("YYYY"),
    momenttimezone(end.replace("T", " ")).format("YYYY"),
  ];

  return dates.every((date) => date === currentYear);
};

export const formatEventDateByTimeZone = ({
  start,
  end,
  allDay,
  timeZone,
  convertDate,
  daylightSavingTime = false,
}) => {
  let _start = start;
  let _end = end;
  const format = allDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm";

  if (timeZone && !allDay && convertDate) {
    const formattedTimeZone = formatTimeZone(timeZone);

    _start = momenttimezone
      .parseZone(_start + formattedTimeZone)
      .local()
      .format(format);
    _end = momenttimezone
      .parseZone(_end + formattedTimeZone)
      .local()
      .format(format);
  }

  if (daylightSavingTime) {
    _start = moment(_start).add(1, "hour").format(format);
    _end = moment(_end).add(1, "hour").format(format);
  }

  return { start: _start, end: _end };
};

const formatTimeZone = (_timeZone) => {
  const timeZone = _timeZone.replace("GMT", "");
  const sign = timeZone.includes("+") ? "+" : "-";
  let formattedTimeZone = "";

  if (timeZone.length === 2) {
    formattedTimeZone = sign + "0" + timeZone.replace(sign, "") + ":00";
  } else {
    formattedTimeZone = timeZone + ":00";
  }

  return formattedTimeZone;
};
