"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractTypeName = exports.applyMap = exports.compact = exports.isEnzymeWrapper = exports.isCheerioWrapper = exports.isReactWrapper = exports.isShallowWrapper = void 0;

var _filter = _interopRequireDefault(require("lodash/filter"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _ShallowWrapper = _interopRequireDefault(require("enzyme/build/ShallowWrapper"));

var _ReactWrapper = _interopRequireDefault(require("enzyme/build/ReactWrapper"));

var _Debug = require("enzyme/build/Debug");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHALLOW_WRAPPER_NAME = _ShallowWrapper.default.name;
var REACT_WRAPPER_NAME = _ReactWrapper.default.name;

var isShallowWrapper = function isShallowWrapper(wrapper) {
  return !(0, _isNil.default)(wrapper) && !(0, _isNil.default)(wrapper.constructor) && wrapper.constructor.name === SHALLOW_WRAPPER_NAME;
};

exports.isShallowWrapper = isShallowWrapper;

var isReactWrapper = function isReactWrapper(wrapper) {
  return !(0, _isNil.default)(wrapper) && !(0, _isNil.default)(wrapper.constructor) && wrapper.constructor.name === REACT_WRAPPER_NAME;
};

exports.isReactWrapper = isReactWrapper;

var isCheerioWrapper = function isCheerioWrapper(wrapper) {
  return !(0, _isNil.default)(wrapper) && !(0, _isNil.default)(wrapper.cheerio);
};

exports.isCheerioWrapper = isCheerioWrapper;

var isEnzymeWrapper = function isEnzymeWrapper(wrapper) {
  return isShallowWrapper(wrapper) || isReactWrapper(wrapper) || isCheerioWrapper(wrapper);
};

exports.isEnzymeWrapper = isEnzymeWrapper;

var compact = function compact(array) {
  return (0, _filter.default)(array, function (item) {
    return !(0, _isNil.default)(item) && item !== '';
  });
};

exports.compact = compact;

var applyMap = function applyMap(json, options) {
  if (typeof options.map === 'function') {
    return options.map(json);
  }

  return json;
};

exports.applyMap = applyMap;

var extractTypeName = function extractTypeName(node) {
  var name = (0, _Debug.typeName)(node);

  if (name === Symbol.for('react.fragment')) {
    return 'React.Fragment';
  }

  return name;
};

exports.extractTypeName = extractTypeName;