"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _StaticWrapper = _interopRequireDefault(require("./StaticWrapper"));

var _elements = require("../elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AppointmentInput = function AppointmentInput(_ref) {
  var inline = _ref.inline,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["inline", "children"]);

  var validation = function validation() {
    return true;
  };

  var keyValid = function keyValid() {
    return true;
  }; // TODO: return value as moment object


  var displayRule = function displayRule(value) {
    return (0, _moment["default"])(value, "DD.MM.YYYY HH:mm").format("".concat(props.dateFormat, " HH:mm"));
  };

  if (inline) {
    return _react["default"].createElement(_StaticWrapper["default"], _extends({}, props, {
      displayRule: displayRule
    }), _react["default"].createElement(_elements.Appointment, _extends({
      validation: validation,
      keyValid: keyValid,
      displayRule: displayRule,
      position: props.position
    }, props)));
  }

  return _react["default"].createElement(_NumPad["default"], _extends({}, props, {
    customInput: children,
    displayRule: displayRule
  }), _react["default"].createElement(_elements.Appointment, _extends({
    validation: validation,
    keyValid: keyValid,
    displayRule: displayRule,
    position: props.position
  }, props)));
};

AppointmentInput.propsType = {
  dateFormat: _propTypes["default"].string,
  weekOffset: _propTypes["default"].number,
  min: _propTypes["default"].string,
  max: _propTypes["default"].string,
  dates: {},
  validation: _propTypes["default"].func,
  keyValid: _propTypes["default"].func,
  displayRule: _propTypes["default"].func
};
AppointmentInput.defaultProps = {
  weekOffset: 0,
  dateFormat: 'DD.MM.YYYY',
  min: undefined,
  max: undefined,
  dates: _propTypes["default"].objectOf(_propTypes["default"].array)
};
var _default = AppointmentInput;
exports["default"] = _default;