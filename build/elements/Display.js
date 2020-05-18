"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BackspaceSharp = _interopRequireDefault(require("@material-ui/icons/BackspaceSharp"));

var _ui = _interopRequireDefault(require("./ui"));

var _useLongPress = _interopRequireDefault(require("../hooks/useLongPress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &:read-only {\n    cursor: not-allowed;\n  }\n  border-radius: 0px;\n  cursor: default;\n  background: transparent;\n  font-size: 1.3em;\n  outline: none;\n  border: none;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  visibility: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: ", "\n    ", " ", "\n    ", ";\n  align-items: center;\n  border: none;\n  background-color: ", ";\n  order: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.subHeader.paddingTop;
}, function (props) {
  return props.theme.subHeader.paddingRight;
}, function (props) {
  return props.theme.subHeader.paddingBottom;
}, function (props) {
  return props.theme.subHeader.paddingLeft;
}, function (props) {
  return props.theme.subHeader.backgroundColor;
}, function (props) {
  return props.theme.subHeader.order;
});

var Backspace = (0, _styledComponents["default"])(_ui["default"])(_templateObject2(), function (props) {
  return props.theme.subHeader.primaryColor;
}, function (props) {
  return props.value ? 'visible' : props.theme.subHeader.emptyVisibility;
});

var Input = _styledComponents["default"].input(_templateObject3());

var Display = _styledComponents["default"].div(_templateObject4());

var DisplayWrapper = function DisplayWrapper(_ref) {
  var value = _ref.value,
      backspace = _ref.backspace,
      longPressBackspace = _ref.longPressBackspace;
  var backspaceLongPress = (0, _useLongPress["default"])(longPressBackspace, 1000);
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Display, null, _react["default"].createElement(Input, {
    role: "display",
    value: value,
    readOnly: true,
    autoFocus: true
  })), _react["default"].createElement(Backspace, _extends({}, backspaceLongPress, {
    onClick: backspace,
    value: value
  }), _react["default"].createElement(_BackspaceSharp["default"], null)));
};

DisplayWrapper.propTypes = {
  value: _propTypes["default"].string.isRequired,
  backspace: _propTypes["default"].func,
  longPressBackspace: _propTypes["default"].func
};
DisplayWrapper.defaultProps = {
  backspace: function backspace() {},
  longPressBackspace: function longPressBackspace() {}
};
var _default = DisplayWrapper;
exports["default"] = _default;