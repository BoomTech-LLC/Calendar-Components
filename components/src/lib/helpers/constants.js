import { copyLink, downloadSharer, openAddToUrl, openShareUrl } from "./addShare";

export const GUEST_LIMIT_BY_PLAN = {
  starter: 25,
  professional: 100,
  business: 500,
};

export const LISTED_DETAILS_CONSTRUCTOR = {
  name: {
    iconName: 'icon-profile',
  },
  phone: {
    preposition: 'tel:',
    iconName: 'icon-Mobile',
  },
  email: {
    preposition: 'mailto:',
    iconName: 'icon-mail2',
  },
  website: {
    preposition: '',
    iconName: 'icon-earth',
  },
}


export const ADD_SHARE_ICONS_CONSTRUCTOR = {
  TITLE: 'Add & Share',
  ADD_TO_ICONS: {
    rowId: 1,
    addToSectionName: 'Add to calendar',
    icons: [
      {
        type: 'google',
        clickHandler: openAddToUrl
      },
      {
        type: 'microsoftoutlook',
        clickHandler: downloadSharer
      },
      {
        type: 'apple',
        clickHandler: downloadSharer
      },
      {
        type: 'yahoo',
        clickHandler: openAddToUrl
      }
    ],
  },
  SHARE_ICONS: {
    rowId: 2,
    shareSectionName: 'Share Event',
    copyTooltipText: 'Copy Event Url',
    copiedTooltipText: 'Copied',
    icons: [
      {
        type: 'facebook',
        clickHandler: openShareUrl
      },
      {
        type: 'linkedin',
        clickHandler: openShareUrl
      },
      {
        type: 'twitter',
        clickHandler: openShareUrl
      },
      {
        type: 'copyLink',
        clickHandler: copyLink
      }
    ],
  }
}