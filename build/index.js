"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Number = _interopRequireDefault(require("./components/Number"));

var _DateTime = _interopRequireDefault(require("./components/DateTime"));

var _Calendar = _interopRequireDefault(require("./components/Calendar"));

var _Appointment = _interopRequireDefault(require("./components/Appointment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Number: _Number["default"],
  DateTime: _DateTime["default"],
  Calendar: _Calendar["default"],
  Appointment: _Appointment["default"]
};
exports["default"] = _default;