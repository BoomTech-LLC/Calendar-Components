"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineClassNames = combineClassNames;
exports.isDefined = void 0;

const isDefined = value => value != null;

exports.isDefined = isDefined;

function combineClassNames(classNames) {
  var _ref;

  if (!classNames || classNames.length === 0) return '';
  return (_ref = ' ' + classNames.join(' ')) !== null && _ref !== void 0 ? _ref : '';
}