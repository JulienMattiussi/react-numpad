"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0.5em;\n  border-bottom: 1px solid #fff;\n  :nth-child(-n + 7) {\n    border-top: '1px solid #ddd';\n  }\n  &:active {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents["default"].div(_templateObject(), function (props) {
  return "color: ".concat(props.theme.body.highlightColor, "; border-color: ").concat(props.theme.body.highlightColor);
});

exports["default"] = _default;