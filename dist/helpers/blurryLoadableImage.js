"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImgfromDropBox = exports.isImgCached = exports.decreaseImgQuality = exports.isImgDecreasable = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

const acceptableFormats = ["png", "jpeg", "jpg", "webm"];

const isImgDecreasable = url => {
  let splitted = url.split(".");
  let format = splitted[splitted.length - 1];
  return acceptableFormats.some(f => format.indexOf(f) !== -1);
};

exports.isImgDecreasable = isImgDecreasable;

const decreaseImgQuality = function decreaseImgQuality(url) {
  let decreaseTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
  return "https://images.weserv.nl/?url=".concat(url, "&q=").concat(decreaseTo, "&fit=inside&we&blur=5&bg=lightgrey&maxage=4w");
};

exports.decreaseImgQuality = decreaseImgQuality;

const isImgCached = url => {
  var image = new Image();
  image.src = url;
  return image.complete;
};

exports.isImgCached = isImgCached;

const isImgfromDropBox = url => {
  return url.includes("dropbox");
};

exports.isImgfromDropBox = isImgfromDropBox;