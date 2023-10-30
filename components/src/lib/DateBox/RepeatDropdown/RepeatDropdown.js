import moment from "moment-timezone";
import React, { useEffect, useRef, useState } from "react";
import { combineClassNames } from "../../helpers/commons";
import styles from "./../main.module.css";

const RepeatDropdown = ({
  datesEqual,
  startDate,
  startTime,
  timeZoneToShow,
  repeatEvents,
  changeRepeatDate,
  start,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) =>
      !wrapper.current?.contains(target) && setIsOpen(false);

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [isOpen]);

  return (
    <div ref={wrapper} className={styles.custom__select__container}>
      <div className={styles.custom__select} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.custom__select__flex}>
          <span className="icon-calendar"></span>
          <p>{`${startDate} ${
            datesEqual ? "" : `${startTime} ${timeZoneToShow}`
          }`}</p>
        </div>
        <span className="chevron-down"></span>
      </div>

      {isOpen && (
        <div
          className={`${styles.custom__select__optgroup} bc_tooltip_content`}
        >
          {repeatEvents.map((item) => (
            <p
              className={combineClassNames([
                styles.custom__select__option,
                moment(item.start).format("DD/MM/YYYY") ==
                moment(start).format("DD/MM/YYYY")
                  ? styles["custom__select__option--active"]
                  : "",
              ])}
              key={item.key}
              onClick={() => {
                changeRepeatDate(item.key, item.start, item.end);
                setIsOpen(false);
              }}
            >
              {moment(item.start).format("DD/MM/YYYY")}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepeatDropdown;
