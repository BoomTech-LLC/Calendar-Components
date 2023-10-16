import React from "react";
import styles from "./../main.module.css";
import PropTypes from "prop-types";
import StartTimeRow from "./StartTimeRow";
import EndTimeRow from "./EndTimeRow";
import {
  formatDate,
  formatTime,
  isDatesInCurrentYear,
} from "../../helpers/dateBox";
import { combineClassNames } from "../../helpers/commons";

const TimeBox = ({
  start,
  end,
  showIcons,
  locale,
  dateFormat,
  timeFormat,
  allDay,
  timeZone,
  showTimeZone,
  wrapperCustomClassNames = [],
  agenda,
  allDayText,
  oneLine,
  fixedHeight,
  startDateOnly,
  showTimeOnly,
  isMapRepeat,
}) => {
  const { startDate, endDate } = formatDate(start, end, dateFormat, locale);
  const { startTime, endTime } = formatTime(
    start,
    end,
    timeFormat,
    allDay,
    locale
  );
  const datesInCurrentYear = isDatesInCurrentYear(start, end);
  const timeZoneToShow = showTimeZone ? timeZone : "";
  const datesEqual = startDate === endDate;
  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;

  return (
    <div
      className={combineClassNames([
        ...wrapperCustomClassNames,
        styles.timebox_wrapper,
      ])}>
      {(!datesInCurrentYear || !(showTimeOnly && datesEqual)) &&
        !isMapRepeat && (
          <StartTimeRow
            showIcons={showIcons}
            datesEqual={datesEqual}
            allDay={allDay}
            oneLine={oneLine}
            startDate={startDate}
            startTime={startTime}
            timeZoneToShow={timeZoneToShow}
          />
        )}

      <EndTimeRow
        datesEqual={datesEqual}
        allDay={allDay}
        startDateOnly={startDateOnly}
        showIcons={showIcons}
        oneLine={oneLine}
        startTime={startTime}
        endTime={endTime}
        endDate={endDate}
        timeZoneToShow={timeZoneToShow}
        agenda={agenda}
        allDayText={allDayText}
      />

      {showHiddenRow && (
        <div
          className={combineClassNames([styles.two_line_start, styles.hidden])}>
          <p className={oneLine ? styles.oneLine : undefined}>hidden row</p>
        </div>
      )}
    </div>
  );
};

TimeBox.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  showIcons: PropTypes.bool,
  locale: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  timeZone: PropTypes.string,
  showTimeZone: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array,
  agenda: PropTypes.bool,
  allDayText: PropTypes.string,
  oneLine: PropTypes.bool,
  fixedHeight: PropTypes.bool,
  startDateOnly: PropTypes.bool,
  showTimeOnly: PropTypes.bool,
};

export default TimeBox;
