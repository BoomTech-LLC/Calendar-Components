import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { combineClassNames } from "../helpers/commons";

const NoImageContainer = ({
  showColorAsBackground = true,
  color,
  wrapperCustomClassNames = [],
}) => {
  const wrapperClassNames = useMemo(
    () => combineClassNames([styles.imgWrapper, ...wrapperCustomClassNames]),
    [wrapperCustomClassNames]
  );
  if (showColorAsBackground === false) return null;

  return (
    <div
      className={wrapperClassNames}
      style={{ backgroundColor: color }}
    ></div>
  );
};

NoImageContainer.propTypes = {
  color: PropTypes.string,
  showColorAsBackground: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
};

export default memo(NoImageContainer);
