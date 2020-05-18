"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _StaticWrapper = _interopRequireDefault(require("./StaticWrapper"));

var _date = require("../utils/date");

var _elements = require("../elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DateTimeInput = function DateTimeInput(_ref) {
  var inline = _ref.inline,
      dateFormat = _ref.dateFormat,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["inline", "dateFormat", "children"]);

  var validation = function validation() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _date.validate)(value, dateFormat, dateFormat.length);
  };

  var formatInputValue = function formatInputValue(value) {
    return value.toString().replace(/\D+/g, '');
  };

  var keyValid = function keyValid(value) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (['.', '-'].includes(key)) return false;
    if (value.length === 12) return false;
    var paddingDate = (0, _date.padding)(value + key, dateFormat);
    return (0, _date.validate)(paddingDate, dateFormat, value.length);
  };

  var displayRule = function displayRule() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _date.display)(value, dateFormat.replace(/[a-z]/gi, '_'));
  };

  if (inline) {
    return _react["default"].createElement(_StaticWrapper["default"], _extends({}, props, {
      displayRule: displayRule
    }), _react["default"].createElement(_elements.KeyPad, _extends({
      validation: validation,
      formatInputValue: formatInputValue,
      keyValid: keyValid,
      displayRule: displayRule
    }, props)));
  }

  return _react["default"].createElement(_NumPad["default"], _extends({}, props, {
    customInput: children,
    formatInputValue: formatInputValue,
    displayRule: displayRule
  }), _react["default"].createElement(_elements.KeyPad, _extends({
    validation: validation,
    keyValid: keyValid,
    displayRule: displayRule
  }, props)));
};

DateTimeInput.propsType = {
  dateFormat: _propTypes["default"].string,
  inline: _propTypes["default"].bool,
  displayRule: _propTypes["default"].func,
  validation: _propTypes["default"].func,
  formatInputValue: _propTypes["default"].func
};
DateTimeInput.defaultProps = {
  dateFormat: 'DD.MM.YYYY HH:mm',
  inline: false
};
var _default = DateTimeInput;
exports["default"] = _default;