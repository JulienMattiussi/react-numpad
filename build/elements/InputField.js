"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-for */
var InputField = (0, _react.forwardRef)(function InputField(_ref, ref) {
  var showKeyPad = _ref.showKeyPad,
      placeholder = _ref.placeholder,
      inputValue = _ref.inputValue,
      label = _ref.label,
      disabled = _ref.disabled,
      customInput = _ref.customInput;
  var input = (0, _react.useRef)(null);

  var onShowKeyPad = function onShowKeyPad() {
    if (input.current) {
      input.current.blur();
    }

    showKeyPad();
  };

  return _react["default"].createElement(_react["default"].Fragment, null, label && _react["default"].createElement("label", null, label), _react["default"].createElement("span", {
    role: "button",
    tabIndex: 0,
    ref: ref,
    onClick: onShowKeyPad,
    onKeyPress: onShowKeyPad,
    "data-testid": "input-field"
  }, customInput ? _react["default"].Children.map(customInput, function (child) {
    return (// TODO: implement an input finder inside the children dom. Now it finds only at the first level deep.
      _react["default"].cloneElement(child, child.type === 'input' ? {
        placeholder: placeholder,
        value: inputValue,
        tabIndex: -1,
        readOnly: true,
        disabled: disabled
      } : {})
    );
  }) : _react["default"].createElement("input", {
    style: {
      outline: 'none'
    },
    ref: input,
    placeholder: placeholder,
    value: inputValue,
    disabled: disabled,
    onClick: onShowKeyPad,
    onKeyPress: onShowKeyPad,
    tabIndex: -1,
    readOnly: true
  })));
});
InputField.displayName = 'InputField';
InputField.defaultProps = {
  placeholder: '',
  inputValue: '',
  label: '',
  disabled: false,
  customInput: undefined
};
InputField.propTypes = {
  showKeyPad: _propTypes["default"].func.isRequired,
  inputValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  customInput: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].element)])
};
var _default = InputField;
exports["default"] = _default;