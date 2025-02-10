import React, { Fragment, memo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import "../icons.css";
import { ADD_SHARE_ICONS_CONSTRUCTOR } from "../helpers/constants";
import { combineClassNames } from "../helpers/commons";
import { generateEventUrl } from "../helpers/addShare";
import moment from "moment-timezone";

const getOrigEndDate = (allDay, endDate, startDate) => {
  const date = endDate || startDate;
  return allDay && endDate !== startDate
    ? moment(date).subtract(1, "d").format("YYYY-MM-DD")
    : date;
};

export default function AddShareIcons({
  title = ADD_SHARE_ICONS_CONSTRUCTOR.TITLE,
  comp_id,
  instance,
  instanceShort,
  titleBorderHidden = false,
  addToSectionName = ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.addToSectionName,
  hideAddToIcons = false,
  shareSectionName = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.shareSectionName,
  hideShareIcons = false,
  boomEventUrlBase,
  event,
  copyActionTooltipText = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS
    .copyActionTooltipText,
  copiedTooltipText = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copiedTooltipText,
  wrapperCustomClassNames = [],
  titleCustomClassNames = [],
  contentCustomClassNames = [],
  copyTooltipCustomClassNames = [],
  order = "vertical",
  addDateInUrl = true,
}) {
  const [copyTooltipText, setCopyTooltipText] = useState(copyActionTooltipText);

  const formatedEvent = {
    ...event,
    end: getOrigEndDate(event.allDay, event.end, event.start),
  };

  if (
    hideAddToIcons &&
    (hideShareIcons || (!hideShareIcons && +formatedEvent.kind === 4))
  )
    return null;

  return (
    <div
      className={combineClassNames([
        styles.add_share_icons_block,
        styles[order],
        ...wrapperCustomClassNames,
      ])}
    >
      <h3
        className={combineClassNames([
          titleBorderHidden ? "" : styles.bordered,
          ...titleCustomClassNames,
        ])}
      >
        {title}
      </h3>
      <div
        className={combineClassNames([
          styles[order],
          ...contentCustomClassNames,
        ])}
      >
        {!hideAddToIcons && (
          <AddShareIconsRow
            constructor={ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS}
            sectionName={addToSectionName}
            event={formatedEvent}
            rowId={ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId}
            instanceShort={instanceShort}
          />
        )}
        {!hideShareIcons && ![4, 5].includes(+formatedEvent.kind) && (
          <AddShareIconsRow
            sectionName={shareSectionName}
            event={formatedEvent}
            boomEventUrlBase={boomEventUrlBase}
            constructor={ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS}
            rowId={ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.rowId}
            copyTooltipText={copyTooltipText}
            setCopyTooltipText={setCopyTooltipText}
            copiedTooltipText={copiedTooltipText}
            copyActionTooltipText={copyActionTooltipText}
            copyTooltipCustomClassNames={copyTooltipCustomClassNames}
            addDateInUrl={addDateInUrl}
          />
        )}
      </div>
    </div>
  );
}

const AddShareIconsRow = memo(
  ({
    instanceShort,
    constructor,
    rowId,
    sectionName,
    event,
    setCopyTooltipText,
    boomEventUrlBase,
    copiedTooltipText,
    copyTooltipText,
    copyActionTooltipText,
    copyTooltipCustomClassNames,
    addDateInUrl,
  }) => {
    return (
      <div className={styles.add_share_icons_row}>
        <div>{sectionName}</div>
        <div>
          {constructor.icons.map((btn) => {
            const isCopyLink = btn.type === "copyLink";

            return (
              <Fragment
                key={`${event.id}-${event.start}-add-share-${btn.type}`}
              >
                <button
                  className={combineClassNames([
                    "icon-" + btn.type,
                    isCopyLink ? styles.hoverable : "",
                  ])}
                  onMouseOut={() =>
                    isCopyLink &&
                    setTimeout(
                      () => setCopyTooltipText(copyActionTooltipText),
                      300
                    )
                  }
                  onClick={(e) => {                    
                    if (rowId === 1)
                      return btn.clickHandler(
                        e,
                        btn.type,
                        event,
                        instanceShort
                      );
                    if (rowId === 2) {
                      const eventUrl = generateEventUrl(
                        event,
                        boomEventUrlBase,
                        isCopyLink && btn.type !== "facebook" ? addDateInUrl : true,
                        [event.start, event.end, +event.all_day],
                        isCopyLink
                      );
                      if (isCopyLink) {
                        btn.clickHandler(
                          e,
                          setCopyTooltipText,
                          copiedTooltipText,
                          eventUrl
                        );
                      } else {
                        btn.clickHandler(e, btn.type, eventUrl);
                      }
                    }
                  }}
                />
                {isCopyLink && (
                  <span
                    className={combineClassNames([
                      styles.copy_tooltip,
                      ...copyTooltipCustomClassNames,
                    ])}
                  >
                    {copyTooltipText}
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
);

AddShareIcons.propTypes = {
  title: PropTypes.string,
  comp_id: PropTypes.string.isRequired,
  instance: PropTypes.string.isRequired,
  instanceShort: PropTypes.string,
  titleBorderHidden: PropTypes.bool,
  event: PropTypes.object.isRequired,
  boomEventUrlBase: PropTypes.string.isRequired,
  hideAddToIcons: PropTypes.bool,
  addToSectionName: PropTypes.string,
  hideShareIcons: PropTypes.bool,
  shareSectionName: PropTypes.string,
  copyActionTooltipText: PropTypes.string,
  copiedTooltipText: PropTypes.string,
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  titleCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  contentCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  copyTooltipCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  order: PropTypes.oneOf(["vertical", "horizontal"]),
  addDateInUrl: PropTypes.bool,
};
