"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _elements = require("../elements");

var _StaticWrapper = _interopRequireDefault(require("./StaticWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CalendarInput = function CalendarInput(_ref) {
  var inline = _ref.inline,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["inline", "children"]);

  var min = props.min,
      max = props.max,
      dateFormat = props.dateFormat,
      timeFormat = props.timeFormat;

  var validation = function validation() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return value.length === 12;
  };

  var keyValid = function keyValid(value) {
    var validAfter = min ? value.isSameOrAfter((0, _moment["default"])(min, dateFormat)) : true;
    var validBefore = max ? value.isSameOrBefore((0, _moment["default"])(max, dateFormat)) : true;
    return validAfter && validBefore;
  };

  var displayRule = function displayRule(value) {
    return value.format("".concat(dateFormat).concat(timeFormat));
  };

  if (inline) {
    return _react["default"].createElement(_StaticWrapper["default"], _extends({}, props, {
      displayRule: displayRule
    }), _react["default"].createElement(_elements.Calendar, _extends({
      validation: validation,
      keyValid: keyValid,
      displayRule: displayRule
    }, props)));
  }

  return _react["default"].createElement(_NumPad["default"], _extends({}, props, {
    customInput: children,
    displayRule: displayRule
  }), _react["default"].createElement(_elements.Calendar, _extends({
    validation: validation,
    keyValid: keyValid,
    displayRule: displayRule
  }, props)));
};

CalendarInput.propsType = {
  dateFormat: _propTypes["default"].string,
  timeFormat: _propTypes["default"].string,
  weekOffset: _propTypes["default"].number,
  min: _propTypes["default"].string,
  max: _propTypes["default"].string,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].string),
  inline: _propTypes["default"].bool,
  validation: _propTypes["default"].func,
  keyValid: _propTypes["default"].func,
  displayRule: _propTypes["default"].func
};
CalendarInput.defaultProps = {
  weekOffset: 0,
  dateFormat: 'DD.MM.YYYY',
  timeFormat: '',
  min: undefined,
  max: undefined,
  markers: [],
  inline: false
};
var _default = CalendarInput;
exports["default"] = _default;