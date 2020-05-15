"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _HeaderMonth = _interopRequireDefault(require("./ui/HeaderMonth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(_ref) {
  var chunkDates = _ref.chunkDates,
      index = _ref.index,
      dateFormat = _ref.dateFormat;
  var headerMonths = (0, _react.useMemo)(function () {
    var months = {};
    chunkDates[index].forEach(function (date) {
      var month = (0, _moment["default"])(date, dateFormat).format('MMMM');

      if (month in months) {
        months[month] += 1;
      } else {
        months[month] = 1;
      }
    });
    return months;
  }, [chunkDates, index, dateFormat]);
  return _react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, Object.keys(headerMonths || {}).map(function (month) {
    return _react["default"].createElement(_HeaderMonth["default"], {
      key: month,
      widthHeader: headerMonths[month]
    }, month);
  }));
};

exports["default"] = _default;