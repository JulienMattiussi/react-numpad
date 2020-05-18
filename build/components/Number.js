"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.integerValidation = exports.positiveValidation = exports.numberValidator = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elements = require("../elements");

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _StaticWrapper = _interopRequireDefault(require("./StaticWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var positiveValidation = function positiveValidation(value) {
  // FIX -0 to be considered positive
  if (value === 0 && Object.is(value, -0)) {
    return false;
  }

  return parseFloat(value) >= 0;
};

exports.positiveValidation = positiveValidation;

var integerValidation = function integerValidation(value) {
  return parseFloat(value) % 1 === 0;
};

exports.integerValidation = integerValidation;

var numberValidator = function numberValidator(decimal, negative) {
  return function (value) {
    if (value === '-' && negative) {
      return true;
    }

    if (Number.isNaN(Number(value))) {
      return false;
    }

    var floatValue = parseFloat(value);

    if (!decimal && !integerValidation(floatValue)) {
      return false;
    }

    if (typeof decimal === 'number' && decimal > 0) {
      if ((floatValue.toString().split('.')[1] || '').length > decimal) {
        return false;
      }
    }

    if (!negative && !positiveValidation(floatValue)) {
      return false;
    }

    return true;
  };
};

exports.numberValidator = numberValidator;

var NumberInput = function NumberInput(_ref) {
  var inline = _ref.inline,
      children = _ref.children,
      keyValidator = _ref.keyValidator,
      decimal = _ref.decimal,
      negative = _ref.negative,
      props = _objectWithoutProperties(_ref, ["inline", "children", "keyValidator", "decimal", "negative"]);

  var validation = function validation(value) {
    return numberValidator(decimal, negative)(value);
  };

  var validator = keyValidator;

  if (!validator) {
    validator = function validator(value) {
      return numberValidator(decimal, negative)(value);
    };
  }

  var keyValid = function keyValid(isValid) {
    return function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var key = arguments.length > 1 ? arguments[1] : undefined;

      if (key === '-') {
        return value.charAt(0) === '-' || isValid(key + value);
      }

      return isValid(key === '.' ? value + key + 1 : value + key);
    };
  };

  var displayRule = function displayRule(value) {
    return value.replace(/^(-)?0+(0\.|\d)/, '$1$2');
  }; // remove leading zeros


  if (inline) {
    return _react["default"].createElement(_StaticWrapper["default"], _extends({}, props, {
      displayRule: displayRule
    }), _react["default"].createElement(_elements.KeyPad, _extends({
      validation: validation,
      keyValid: keyValid(validator),
      displayRule: displayRule
    }, props)));
  }

  return _react["default"].createElement(_NumPad["default"], _extends({}, props, {
    customInput: children,
    displayRule: displayRule
  }), _react["default"].createElement(_elements.KeyPad, _extends({
    validation: validation,
    keyValid: keyValid(validator),
    displayRule: displayRule
  }, props)));
};

NumberInput.propTypes = {
  inline: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),
  keyValidator: _propTypes["default"].func,
  decimal: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  negative: _propTypes["default"].bool
};
NumberInput.defaultProps = {
  inline: false,
  children: undefined,
  keyValidator: undefined,
  decimal: true,
  negative: true
};
var _default = NumberInput;
exports["default"] = _default;