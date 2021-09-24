"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_SHARE_ICONS_CONSTRUCTOR = exports.LISTED_DETAILS_CONSTRUCTOR = exports.GUEST_LIMIT_BY_PLAN = void 0;

var _addShare = require("./addShare");

const GUEST_LIMIT_BY_PLAN = {
  starter: 25,
  professional: 100,
  business: 500
};
exports.GUEST_LIMIT_BY_PLAN = GUEST_LIMIT_BY_PLAN;
const LISTED_DETAILS_CONSTRUCTOR = {
  name: {
    iconName: 'icon-profile'
  },
  phone: {
    preposition: 'tel:',
    iconName: 'icon-Mobile'
  },
  email: {
    preposition: 'mailto:',
    iconName: 'icon-mail2'
  },
  website: {
    preposition: '',
    iconName: 'icon-earth'
  }
};
exports.LISTED_DETAILS_CONSTRUCTOR = LISTED_DETAILS_CONSTRUCTOR;
const ADD_SHARE_ICONS_CONSTRUCTOR = {
  TITLE: 'Add & Share',
  ADD_TO_ICONS: {
    rowId: 1,
    addToSectionName: 'Add to calendar',
    icons: [{
      type: 'google',
      clickHandler: _addShare.openAddToUrl
    }, {
      type: 'microsoftoutlook',
      clickHandler: _addShare.downloadSharer
    }, {
      type: 'apple',
      clickHandler: _addShare.downloadSharer
    }, {
      type: 'yahoo',
      clickHandler: _addShare.openAddToUrl
    }]
  },
  SHARE_ICONS: {
    rowId: 2,
    shareSectionName: 'Share Event',
    copyActionTooltipText: 'Copy Event Url',
    copiedTooltipText: 'Copied',
    icons: [{
      type: 'facebook',
      clickHandler: _addShare.openShareUrl
    }, {
      type: 'linkedin',
      clickHandler: _addShare.openShareUrl
    }, {
      type: 'twitter',
      clickHandler: _addShare.openShareUrl
    }, {
      type: 'copyLink',
      clickHandler: _addShare.copyLink
    }]
  }
};
exports.ADD_SHARE_ICONS_CONSTRUCTOR = ADD_SHARE_ICONS_CONSTRUCTOR;