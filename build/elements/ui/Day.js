"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  background: white;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 0;\n  text-transform: capitalize;\n  line-height: 1;\n  .number {\n    font-size: 1.2em;\n  }\n  .name {\n    font-size: 0.8em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents["default"].div(_templateObject());

exports["default"] = _default;