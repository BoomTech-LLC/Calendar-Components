"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIMEZONE_LIST = exports.LISTED_DETAILS_CONSTRUCTOR = exports.ADD_SHARE_ICONS_CONSTRUCTOR = void 0;
var _addShare = require("./addShare");
const LISTED_DETAILS_CONSTRUCTOR = exports.LISTED_DETAILS_CONSTRUCTOR = {
  name: {
    iconName: 'profile'
  },
  phone: {
    preposition: 'tel:',
    iconName: 'Mobile'
  },
  email: {
    preposition: 'mailto:',
    iconName: 'mail2'
  },
  website: {
    preposition: '',
    iconName: 'earth',
    validate: value => {
      if (value.indexOf('http') !== 0 && value.indexOf('file://') !== 0) return 'https://' + value;
      return value;
    }
  },
  location: {
    iconName: ''
  }
};
const ADD_SHARE_ICONS_CONSTRUCTOR = exports.ADD_SHARE_ICONS_CONSTRUCTOR = {
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
const TIMEZONE_LIST = exports.TIMEZONE_LIST = [{
  value: "0",
  offset: "GMT-12",
  tzName: "Etc/GMT+12",
  label: "(GMT-12:00) International Date Line West"
}, {
  value: "1",
  offset: "GMT-11",
  tzName: "Etc/GMT+11",
  label: "(GMT-11:00) Coordinated Universal Time-11"
}, {
  value: "2",
  offset: "GMT-11",
  tzName: "Pacific/Midway",
  label: "(GMT-11:00) Midway"
}, {
  value: "3",
  offset: "GMT-11",
  tzName: "Pacific/Niue",
  label: "(GMT-11:00) Niue"
}, {
  value: "4",
  offset: "GMT-11",
  tzName: "Pacific/Pago_Pago",
  label: "(GMT-11:00) Pago_Pago"
}, {
  value: "5",
  offset: "GMT-11",
  tzName: "Pacific/Samoa",
  label: "(GMT-11:00) Samoa"
}, {
  value: "6",
  offset: "GMT-10",
  tzName: "America/Adak",
  label: "(GMT-10:00) Adak"
}, {
  value: "7",
  offset: "GMT-10",
  tzName: "Pacific/Rarotonga",
  label: "(GMT-10:00) Rarotonga"
}, {
  value: "8",
  offset: "GMT-10",
  tzName: "Pacific/Tahiti",
  label: "(GMT-10:00) Tahiti"
}, {
  value: "9",
  offset: "GMT-10",
  tzName: "Pacific/Honolulu",
  label: "(GMT-10:00) Hawaii"
}, {
  value: "10",
  offset: "GMT-9",
  tzName: "America/Anchorage",
  label: "(GMT-09:00) Alaska"
}, {
  value: "11",
  offset: "GMT-9",
  tzName: "Pacific/Gambier",
  label: "(GMT-09:00) Gambier"
}, {
  value: "12",
  offset: "GMT-8",
  tzName: "America/Juneau",
  label: "(GMT-08:00) Juneau"
}, {
  value: "13",
  offset: "GMT-8",
  tzName: "America/Nome",
  label: "(GMT-08:00) Nome"
}, {
  value: "14",
  offset: "GMT-8",
  tzName: "America/Metlakatla",
  label: "(GMT-08:00) Metlakatla"
}, {
  value: "15",
  offset: "GMT-8",
  tzName: "America/Sitka",
  label: "(GMT-08:00) Sitka"
}, {
  value: "16",
  offset: "GMT-8",
  tzName: "America/Yakutat",
  label: "(GMT-08:00) Yakutat"
}, {
  value: "17",
  offset: "GMT-8",
  tzName: "America/Tijuana",
  label: "(GMT-08:00) Baja California"
}, {
  value: "18",
  offset: "GMT-8",
  tzName: "America/Los_Angeles",
  label: "(GMT-08:00) Pacific Time (US & Canada)"
}, {
  value: "19",
  offset: "GMT-8",
  tzName: "Pacific/Pitcairn",
  label: "(GMT-08:00) Pitcairn"
}, {
  value: "20",
  offset: "GMT-7",
  tzName: "America/Phoenix",
  label: "(GMT-07:00) Arizona"
}, {
  value: "21",
  offset: "GMT-7",
  tzName: "America/Denver",
  label: "(GMT-07:00) Mountain Time (US & Canada)"
}, {
  value: "22",
  offset: "GMT-6",
  tzName: "America/Guatemala",
  label: "(GMT-06:00) Central America"
}, {
  value: "23",
  offset: "GMT-6",
  tzName: "America/Chicago",
  label: "(GMT-06:00) Central Time (US & Canada)"
}, {
  value: "24",
  offset: "GMT-6",
  tzName: "America/Mexico_City",
  label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey"
}, {
  value: "25",
  offset: "GMT-6",
  tzName: "America/Regina",
  label: "(GMT-06:00) Saskatchewan"
}, {
  value: "26",
  offset: "GMT-5",
  tzName: "America/Bogota",
  label: "(GMT-05:00) Bogota, Lima, Quito"
}, {
  value: "27",
  offset: "GMT-5",
  tzName: "America/New_York",
  label: "(GMT-05:00) Eastern Time (US & Canada)"
}, {
  value: "28",
  offset: "GMT-5",
  tzName: "America/Indianapolis",
  label: "(GMT-05:00) Indiana (East)"
}, {
  value: "29",
  offset: "GMT-4",
  tzName: "America/Asuncion",
  label: "(GMT-04:00) Asuncion"
}, {
  value: "30",
  offset: "GMT-4",
  tzName: "America/Halifax",
  label: "(GMT-04:00) Atlantic Time (Canada)"
}, {
  value: "31",
  offset: "GMT-4",
  tzName: "America/Cuiaba",
  label: "(GMT-04:00) Cuiaba"
}, {
  value: "32",
  offset: "GMT-4",
  tzName: "America/La_Paz",
  label: "(GMT-04:00) Georgetown, La Paz, Manaus, San Juan"
}, {
  value: "33",
  offset: "GMT-4",
  tzName: "America/Santiago",
  label: "(GMT-04:00) Santiago"
}, {
  value: "34",
  offset: "GMT-3",
  tzName: "America/Araguaina",
  label: "(GMT-03:00) Araguaina"
}, {
  value: "35",
  offset: "GMT-3",
  tzName: "America/Sao_Paulo",
  label: "(GMT-03:00) Brasilia"
}, {
  value: "36",
  offset: "GMT-3",
  tzName: "America/Cayenne",
  label: "(GMT-03:00) Cayenne, Fortaleza"
}, {
  value: "37",
  offset: "GMT-3",
  tzName: "America/Punta_Arenas",
  label: "(GMT-03:00) Punta Arenas"
}, {
  value: "38",
  offset: "GMT-2",
  tzName: "Etc/GMT+2",
  label: "(GMT-02:00) Coordinated Universal Time-02"
}, {
  value: "39",
  offset: "GMT-1",
  tzName: "Atlantic/Azores",
  label: "(GMT-01:00) Azores"
}, {
  value: "40",
  offset: "GMT",
  tzName: "UTC",
  label: "(GMT+00:00) Default"
}, {
  value: "41",
  offset: "GMT+1",
  tzName: "Africa/Casablanca",
  label: "(GMT+01:00) Casablanca"
}, {
  value: "42",
  offset: "GMT+1",
  tzName: "Europe/Berlin",
  label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
}, {
  value: "43",
  offset: "GMT+1",
  tzName: "Europe/Budapest",
  label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"
}, {
  value: "44",
  offset: "GMT+1",
  tzName: "Europe/Paris",
  label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"
}, {
  value: "45",
  offset: "GMT+1",
  tzName: "Europe/Warsaw",
  label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb"
}, {
  value: "46",
  offset: "GMT+2",
  tzName: "Europe/Istanbul",
  label: "(GMT+02:00) Athens, Bucharest, Istanbul"
}, {
  value: "47",
  offset: "GMT+2",
  tzName: "Asia/Beirut",
  label: "(GMT+02:00) Beirut"
}, {
  value: "48",
  offset: "GMT+2",
  tzName: "Africa/Cairo",
  label: "(GMT+02:00) Cairo"
}, {
  value: "49",
  offset: "GMT+3",
  tzName: "Asia/Baghdad",
  label: "(GMT+03:00) Baghdad"
}, {
  value: "50",
  offset: "GMT+3",
  tzName: "Asia/Riyadh",
  label: "(GMT+03:00) Kuwait, Riyadh"
}, {
  value: "51",
  offset: "GMT+3",
  tzName: "Europe/Moscow",
  label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd"
}, {
  value: "52",
  offset: "GMT+4",
  tzName: "Asia/Dubai",
  label: "(GMT+04:00) Abu Dhabi, Muscat"
}, {
  value: "53",
  offset: "GMT+4",
  tzName: "Europe/Samara",
  label: "(GMT+04:00) Samara"
}, {
  value: "54",
  offset: "GMT+4",
  tzName: "Asia/Tbilisi",
  label: "(GMT+04:00) Tbilisi"
}, {
  value: "55",
  offset: "GMT+4",
  tzName: "Asia/Yerevan",
  label: "(GMT+04:00) Yerevan"
}, {
  value: "56",
  offset: "GMT+5",
  tzName: "Asia/Tashkent",
  label: "(GMT+05:00) Tashkent"
}, {
  value: "57",
  offset: "GMT+5",
  tzName: "Asia/Yekaterinburg",
  label: "(GMT+05:00) Yekaterinburg"
}, {
  value: "58",
  offset: "GMT+5",
  tzName: "Asia/Karachi",
  label: "(GMT+05:00) Islamabad, Karachi"
}, {
  value: "59",
  offset: "GMT+5",
  tzName: "Asia/Colombo",
  label: "(GMT+05:30) Sri Jayawardenepura"
}, {
  value: "60",
  offset: "GMT+6",
  tzName: "Asia/Almaty",
  label: "(GMT+06:00) Astana"
}, {
  value: "61",
  offset: "GMT+6",
  tzName: "Asia/Dhaka",
  label: "(GMT+06:00) Dhaka"
}, {
  value: "62",
  offset: "GMT+6",
  tzName: "Asia/Omsk",
  label: "(GMT+06:00) Omsk"
}, {
  value: "63",
  offset: "GMT+7",
  tzName: "Asia/Bangkok",
  label: "(GMT+07:00) Bangkok, Hanoi, Jakarta"
}, {
  value: "64",
  offset: "GMT+7",
  tzName: "Asia/Hovd",
  label: "(GMT+07:00) Hovd"
}, {
  value: "65",
  offset: "GMT+7",
  tzName: "Asia/Krasnoyarsk",
  label: "(GMT+07:00) Krasnoyarsk"
}, {
  value: "66",
  offset: "GMT+7",
  tzName: "Asia/Tomsk",
  label: "(GMT+07:00) Tomsk"
}, {
  value: "67",
  offset: "GMT+8",
  tzName: "Asia/Shanghai",
  label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi"
}, {
  value: "68",
  offset: "GMT+8",
  tzName: "Asia/Irkutsk",
  label: "(GMT+08:00) Irkutsk"
}, {
  value: "69",
  offset: "GMT+8",
  tzName: "Asia/Singapore",
  label: "(GMT+08:00) Kuala Lumpur, Singapore"
}, {
  value: "70",
  offset: "GMT+8",
  tzName: "Australia/Perth",
  label: "(GMT+08:00) Perth"
}, {
  value: "71",
  offset: "GMT+8",
  tzName: "Asia/Taipei",
  label: "(GMT+08:00) Taipei"
}, {
  value: "72",
  offset: "GMT+8",
  tzName: "Asia/Ulaanbaatar",
  label: "(GMT+08:00) Ulaanbaatar"
}, {
  value: "73",
  offset: "GMT+9",
  tzName: "Asia/Chita",
  label: "(GMT+09:00) Chita"
}, {
  value: "74",
  offset: "GMT+9",
  tzName: "Asia/Tokyo",
  label: "(GMT+09:00) Osaka, Sapporo, Tokyo"
}, {
  value: "75",
  offset: "GMT+9",
  tzName: "Asia/Seoul",
  label: "(GMT+09:00) Seoul"
}, {
  value: "76",
  offset: "GMT+9",
  tzName: "Asia/Yakutsk",
  label: "(GMT+09:00) Yakutsk"
}, {
  value: "77",
  offset: "GMT+10",
  tzName: "Australia/Brisbane",
  label: "(GMT+10:00) Brisbane"
}, {
  value: "78",
  offset: "GMT+10",
  tzName: "Pacific/Port_Moresby",
  label: "(GMT+10:00) Guam, Port Moresby"
}, {
  value: "79",
  offset: "GMT+10",
  tzName: "Australia/Hobart",
  label: "(GMT+10:00) Hobart"
}, {
  value: "80",
  offset: "GMT+10",
  tzName: "Asia/Vladivostok",
  label: "(GMT+10:00) Vladivostok"
}, {
  value: "81",
  offset: "GMT+11",
  tzName: "Pacific/Bougainville",
  label: "(GMT+11:00) Bougainville"
}, {
  value: "82",
  offset: "GMT+11",
  tzName: "Asia/Sakhalin",
  label: "(GMT+11:00) Sakhalin"
}, {
  value: "83",
  offset: "GMT+12",
  tzName: "Asia/Anadyr",
  label: "(GMT+12:00) Anadyr"
}, {
  value: "84",
  offset: "GMT+12",
  tzName: "Pacific/Auckland",
  label: "(GMT+12:00) Auckland, Wellington"
}, {
  value: "85",
  offset: "GMT+12",
  tzName: "Etc/GMT-12",
  label: "(GMT+12:00) Coordinated Universal Time+12"
}, {
  value: "86",
  offset: "GMT+12",
  tzName: "Pacific/Fiji",
  label: "(GMT+12:00) Fiji"
}, {
  value: "87",
  offset: "GMT+13",
  tzName: "Pacific/Apia",
  value: "(GMT+13:00) Apia"
}];