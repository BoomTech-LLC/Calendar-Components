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
import { combineClassNames, guessOffset } from "../../helpers/commons";
import RepeatDropdown from "../RepeatDropdown/RepeatDropdown";
import Additional from "./additional";

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
  changeRepeatDate,
  repeatEvents,
  additional,
  oneLineTimeBox,
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
  const timeZoneToShow = showTimeZone ? guessOffset(timeZone) : "";
  const datesEqual = startDate === endDate;
  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;

  return (
    <div
      className={combineClassNames([
        ...wrapperCustomClassNames,
        styles.timebox_wrapper,
        oneLineTimeBox ? styles.oneLineTimeBox : "",
      ])}
    >
      {isMapRepeat ? (
        <RepeatDropdown
          showIcons={showIcons}
          datesEqual={datesEqual}
          allDay={allDay}
          oneLine={oneLine}
          startDate={startDate}
          startTime={startTime}
          timeZoneToShow={timeZoneToShow}
          changeRepeatDate={changeRepeatDate}
          repeatEvents={repeatEvents}
          start={start}
        />
      ) : (
        (!datesInCurrentYear || !(showTimeOnly && datesEqual)) && (
          <StartTimeRow
            showIcons={showIcons}
            datesEqual={datesEqual}
            allDay={allDay}
            oneLine={oneLine}
            startDate={startDate}
            startTime={startTime}
            timeZoneToShow={timeZoneToShow}
          />
        )
      )}

      {oneLineTimeBox ? "/" : ""}

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
          className={combineClassNames([styles.two_line_start, styles.hidden])}
        >
          <p className={oneLine ? styles.oneLine : undefined}>hidden row</p>
        </div>
      )}

      <Additional additional={additional} />
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
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  oneLineTimeBox: PropTypes.bool,
};

export default TimeBox;
