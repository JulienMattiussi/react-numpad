"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ChevronLeftSharp = _interopRequireDefault(require("@material-ui/icons/ChevronLeftSharp"));

var _ChevronRightSharp = _interopRequireDefault(require("@material-ui/icons/ChevronRightSharp"));

var _CalendarUI = require("./CalendarUI");

var _ui = _interopRequireDefault(require("./ui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var YearView = function YearView(_ref) {
  var date = _ref.date,
      handleChangeYear = _ref.handleChangeYear;

  var _useState = (0, _react.useState)(date.year()),
      _useState2 = _slicedToArray(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var prev = function prev() {
    setYear(year - 12);
  };

  var next = function next() {
    setYear(year + 12);
  };

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_CalendarUI.Header, null, _react["default"].createElement(_ui["default"], {
    onClick: prev
  }, _react["default"].createElement(_ChevronLeftSharp["default"], null)), _react["default"].createElement(_ui["default"], {
    onClick: next
  }, _react["default"].createElement(_ChevronRightSharp["default"], null))), _react["default"].createElement(_CalendarUI.TwelveGrid, null, Array(12).fill().map(function (_, i) {
    return _react["default"].createElement(_CalendarUI.TwelveGridItem, {
      onClick: function onClick() {
        return handleChangeYear(year - 5 + i);
      },
      key: "month-".concat(year - 5 + i)
    }, year - 5 + i);
  })));
};

YearView.propTypes = {
  handleChangeYear: _propTypes["default"].func.isRequired,
  date: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};
var _default = YearView;
exports["default"] = _default;