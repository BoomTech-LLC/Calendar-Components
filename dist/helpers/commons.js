"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILE_CHECK_REGEX = void 0;
exports.combineClassNames = combineClassNames;
exports.isUrl = exports.isObjectEmpty = exports.isDefined = exports.guessOffset = exports.getRandomNumber = exports.generateLocationUrl = exports.encodeId = void 0;
exports.parseJson = parseJson;
exports.validateUrl = exports.stopPropagation = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.some.js");
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isDefined = value => value != null;
exports.isDefined = isDefined;
function combineClassNames(classNames) {
  var _classNames$join;
  if (!classNames || classNames.length === 0) return "";
  return (_classNames$join = classNames.join(" ")) !== null && _classNames$join !== void 0 ? _classNames$join : "";
}
const encodeId = str => {
  const id = str.split("");
  let i;
  for (i = 0; i < id.length; i++) {
    switch (id[i]) {
      case "1":
        id[i] = "H9";
        break;
      case "2":
        id[i] = "A8";
        break;
      case "3":
        id[i] = "J7";
        break;
      case "4":
        id[i] = "M6";
        break;
      case "5":
        id[i] = "R5";
        break;
      case "6":
        id[i] = "O4";
        break;
      case "7":
        id[i] = "L3";
        break;
      case "8":
        id[i] = "W2";
        break;
      case "9":
        id[i] = "U1";
        break;
      case "0":
        id[i] = "K0";
        break;
      default:
    }
  }
  const l = id.length;
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (i = 0; i < l * 2 + 2; i = i + Math.ceil(Math.random() * 3)) {
    id.splice(i, 0, chars[Math.ceil(Math.random() * 26)]);
  }
  return id.join("");
};
exports.encodeId = encodeId;
const isObjectEmpty = obj => !Object.values(obj).some(x => x !== null && x !== "");
exports.isObjectEmpty = isObjectEmpty;
const stopPropagation = e => e.stopPropagation();
exports.stopPropagation = stopPropagation;
function parseJson(obj) {
  try {
    JSON.parse(obj);
  } catch (e) {
    return obj;
  }
  return JSON.parse(obj);
}
const isUrl = url => {
  return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url);
};
exports.isUrl = isUrl;
const validateUrl = url => {
  if (url.startsWith("http") || url.startsWith("https")) {
    return url;
  }
  return "https://" + url;
};
exports.validateUrl = validateUrl;
const guessOffset = timezone => {
  if (timezone.includes("GMT")) return timezone;
  const currentOffsetMinutes = _momentTimezone.default.tz(timezone).utcOffset();
  const offsetHours = Math.floor(Math.abs(currentOffsetMinutes) / 60);
  const gmtOffsetString = "GMT".concat(currentOffsetMinutes >= 0 ? "+" : "-").concat(offsetHours);
  return gmtOffsetString;
};
exports.guessOffset = guessOffset;
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomNumber = getRandomNumber;
const generateLocationUrl = (disabled, address, displayName) => {
  if (disabled) return undefined;
  if (isUrl(address)) return validateUrl(address);
  return "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(displayName ? "".concat(displayName, " ").concat(address) : address));
};
exports.generateLocationUrl = generateLocationUrl;
const FILE_CHECK_REGEX = exports.FILE_CHECK_REGEX = /\.(png|jpe?g|gif|svg|webp|bmp|ico|pdf|txt|csv|json|xml|yaml|yml|html|md|js|css|ts|py|c|cpp|java|sh|php|rb|log|vtt|mp3|wav|ogg|flac|mp4|webm|m4v)$/i;