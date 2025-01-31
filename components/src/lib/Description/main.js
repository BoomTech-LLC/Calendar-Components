import React from "react";
import styles from "./main.module.css";
import { combineClassNames, FILE_CHECK_REGEX } from "../helpers/commons";
import PropTypes from "prop-types";

const Description = ({
  title,
  children,
  wrapperCustomClassNames = [],
  attachments = [],
}) => {
  if (!children && !attachments.length) return null;

  return (
    <div
      className={combineClassNames([
        styles.description,
        ...wrapperCustomClassNames,
      ])}
    >
      {title && <h3 className={styles.description_title}>{title}</h3>}
      <p
        dangerouslySetInnerHTML={{
          __html: children
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&nbsp;/g, " "),
        }}
      />

      {attachments.length ? (
        <ul className={styles.attachment__container}>
          {attachments.map((attachment) => {
            return (
              <li key={attachment.id}>
                <a href={attachment.url} target={FILE_CHECK_REGEX.test(attachment.name) ? "_blank" : "_self"}>
                  {attachment.name}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
};

export default Description;
