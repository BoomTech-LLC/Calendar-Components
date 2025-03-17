import React from "react";
import PropTypes from "prop-types";
import styles from "./../main.module.css";
import { combineClassNames } from "../../helpers/commons";

const Additional = ({ additional }) => {
  if (!additional?.length) return null;

  return additional.map(({ icon, text }, index) => {
    return (
      <div className={styles.two_line_start}>
        <div
          className={combineClassNames([
            styles.additionalIcon,
            "icon-additional-" + index,
          ])}
        />
        <style>{`.icon-additional-${index}:before{content:"${icon}"}`}</style>
        <p className={styles.oneLine}>{text}</p>
      </div>
    );
  });
};

Additional.propTypes = {
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Additional;
