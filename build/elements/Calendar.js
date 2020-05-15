"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactSwipeable = require("react-swipeable");

var _useOnclickoutside = _interopRequireDefault(require("use-onclickoutside"));

var _CalendarYearView = _interopRequireDefault(require("./CalendarYearView"));

var _CalendarMonthView = _interopRequireDefault(require("./CalendarMonthView"));

var _CalendarDayView = _interopRequireDefault(require("./CalendarDayView"));

var _CalendarUI = require("./CalendarUI");

var _TimeView = _interopRequireDefault(require("./TimeView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Calendar = (0, _react.forwardRef)(function Calendar(_ref, ref) {
  var locale = _ref.locale,
      weekOffset = _ref.weekOffset,
      keyValid = _ref.keyValid,
      min = _ref.min,
      max = _ref.max,
      dateFormat = _ref.dateFormat,
      markers = _ref.markers,
      value = _ref.value,
      confirm = _ref.confirm,
      timeFormat = _ref.timeFormat,
      cancel = _ref.cancel,
      position = _ref.position;
  (0, _react.useLayoutEffect)(function () {
    // Moment.js hack to load locales when needed
    if (locale !== 'en') {
      try {
        // eslint-disable-next-line import/no-dynamic-require
        require("moment/locale/".concat(locale)); // eslint-disable-line global-require

      } catch (e) {
        console.warn("Wrong locale ".concat(locale, ", ").concat(e.message)); // eslint-disable-line no-console
      }
    }
  }, []);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      preValue = _useState2[0],
      setPreValue = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _moment["default"])().startOf('day')),
      _useState4 = _slicedToArray(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  var _useState5 = (0, _react.useState)((0, _moment["default"])().startOf('day').startOf('month')),
      _useState6 = _slicedToArray(_useState5, 2),
      calendarMonth = _useState6[0],
      setCalendarMonth = _useState6[1];

  var _useState7 = (0, _react.useState)(_CalendarUI.VIEWS.DAY_VIEW),
      _useState8 = _slicedToArray(_useState7, 2),
      calendarView = _useState8[0],
      setCalendarView = _useState8[1];

  (0, _useOnclickoutside["default"])(ref, cancel);

  if (value && value !== preValue) {
    setPreValue(value);
    setDate((0, _moment["default"])(value, dateFormat).startOf('day'));
    setCalendarMonth((0, _moment["default"])(value, dateFormat).startOf('day').startOf('month'));
  }

  var onChange = (0, _react.useCallback)(function (newDate) {
    if (calendarView === _CalendarUI.VIEWS.DAY_VIEW && timeFormat) {
      setCalendarView(_CalendarUI.VIEWS.TIME_VIEW);
      setDate(newDate.clone());
    } else {
      confirm(newDate);
    }
  }, [calendarView, timeFormat]);
  var handleNextMonth = (0, _react.useCallback)(function () {
    setCalendarMonth(calendarMonth.clone().add(1, 'months').startOf('month'));
  }, [calendarMonth]);
  var handlePrevMonth = (0, _react.useCallback)(function () {
    setCalendarMonth(calendarMonth.clone().subtract(1, 'months').startOf('month'));
  }, [calendarMonth]);
  var handleChangeMonth = (0, _react.useCallback)(function (month) {
    setCalendarMonth(calendarMonth.clone().month(month).startOf('month'));
    setCalendarView(_CalendarUI.VIEWS.DAY_VIEW);
  }, [calendarMonth]);
  var handleBackTime = (0, _react.useCallback)(function () {
    setCalendarView(_CalendarUI.VIEWS.DAY_VIEW);
  });
  var handleNextYear = (0, _react.useCallback)(function () {
    setCalendarMonth(calendarMonth.clone().add(1, 'year'));
  }, [calendarMonth]);
  var handlePrevYear = (0, _react.useCallback)(function () {
    setCalendarMonth(calendarMonth.clone().subtract(1, 'year'));
  }, [calendarMonth]);
  var handleChangeYear = (0, _react.useCallback)(function (year) {
    setCalendarMonth(calendarMonth.clone().year(year));
    setCalendarView(_CalendarUI.VIEWS.DAY_VIEW);
  }, [calendarMonth]);
  return _react["default"].createElement(_reactSwipeable.Swipeable, {
    onSwipedLeft: handleNextMonth,
    onSwipedRight: handlePrevMonth
  }, _react["default"].createElement(_CalendarUI.Container, null, _react["default"].createElement(_CalendarUI.Content, {
    ref: ref,
    position: position,
    square: true
  }, calendarView === _CalendarUI.VIEWS.DAY_VIEW && _react["default"].createElement(_CalendarDayView["default"], {
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    handlePrevYear: handlePrevYear,
    handleNextYear: handleNextYear,
    updateCalendarView: setCalendarView,
    weekOffset: weekOffset,
    locale: locale,
    calendarMonth: calendarMonth,
    onChange: onChange,
    min: min,
    date: date,
    keyValid: keyValid,
    max: max,
    dateFormat: dateFormat,
    markers: markers
  }), calendarView === _CalendarUI.VIEWS.TIME_VIEW && _react["default"].createElement(_TimeView["default"], {
    locale: locale,
    onChange: confirm,
    date: date,
    handleBackTime: handleBackTime
  }), calendarView === _CalendarUI.VIEWS.MONTH_VIEW && _react["default"].createElement(_CalendarMonthView["default"], {
    locale: locale,
    handleChangeMonth: handleChangeMonth
  }), calendarView === _CalendarUI.VIEWS.YEAR_VIEW && _react["default"].createElement(_CalendarYearView["default"], {
    handleChangeYear: handleChangeYear,
    date: date
  }))));
});
Calendar.propTypes = {
  confirm: _propTypes["default"].func.isRequired,
  cancel: _propTypes["default"].func,
  weekOffset: _propTypes["default"].number,
  value: _propTypes["default"].string,
  dateFormat: _propTypes["default"].string,
  timeFormat: _propTypes["default"].string,
  locale: _propTypes["default"].string.isRequired,
  keyValid: _propTypes["default"].func.isRequired,
  min: _propTypes["default"].string,
  max: _propTypes["default"].string,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  position: _propTypes["default"].string.isRequired
};
Calendar.defaultProps = {
  weekOffset: 0,
  value: undefined,
  dateFormat: 'MM/DD/YYYY',
  timeFormat: undefined,
  min: undefined,
  max: undefined,
  cancel: function cancel() {}
};
var _default = Calendar;
exports["default"] = _default;