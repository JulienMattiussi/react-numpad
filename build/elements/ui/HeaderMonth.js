"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 0.8em;\n  padding: 2px 0;\n  justify-content: center;\n  flex-grow: ", ";\n  flex-basis: 0;\n  background: ", ";\n  color: white;\n  text-transform: uppercase;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.widthHeader;
}, function (props) {
  return props.theme.header.backgroundColor;
});

exports["default"] = _default;