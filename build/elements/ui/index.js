"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-size: 1.6em;\n  padding: 3px 0px;\n  :active,\n  :focus {\n    outline: none;\n  }\n  :disabled {\n    pointer-events: none;\n    cursor: now-allowed;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// TODO use material-ui colors
var NButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.theme.header.primaryColor;
}, function (props) {
  return props.theme.header.highlightColor;
}, function (props) {
  return (0, _color["default"])(props.theme.header.secondaryColor).darken(0.4).string();
});

var _default = NButton;
exports["default"] = _default;