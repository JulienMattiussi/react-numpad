"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useOnclickoutside = _interopRequireDefault(require("use-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _reactSwipeable = require("react-swipeable");

var _lodash = _interopRequireDefault(require("lodash.chunk"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _ChevronLeftSharp = _interopRequireDefault(require("@material-ui/icons/ChevronLeftSharp"));

var _ChevronRightSharp = _interopRequireDefault(require("@material-ui/icons/ChevronRightSharp"));

var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));

var _CalendarUI = require("./CalendarUI");

var _AppointmentUI = _interopRequireDefault(require("./AppointmentUI"));

var _AppointmentMonthHeader = _interopRequireDefault(require("./AppointmentMonthHeader"));

var _ui = _interopRequireDefault(require("./ui"));

var _mediaTemplates = require("../styles/media-templates");

var _Days = _interopRequireDefault(require("./ui/Days"));

var _DayTimes = _interopRequireDefault(require("./ui/DayTimes"));

var _Day = _interopRequireDefault(require("./ui/Day"));

var _Times = _interopRequireDefault(require("./ui/Times"));

var _Time = _interopRequireDefault(require("./ui/Time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppointmentHeader = (0, _styledComponents["default"])(_CalendarUI.Header)(_templateObject());
var Appointment = (0, _react.forwardRef)(function Appointment(_ref, ref) {
  var dates = _ref.dates,
      dateFormat = _ref.dateFormat,
      locale = _ref.locale,
      confirm = _ref.confirm,
      cancel = _ref.cancel,
      position = _ref.position;

  var _useState = (0, _react.useState)((0, _mediaTemplates.isMobile)() ? 4 : 7),
      _useState2 = _slicedToArray(_useState, 2),
      dayRange = _useState2[0],
      setDayRange = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      orderedDates = _useState6[0],
      setOrderedDates = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      prevProps = _useState8[0],
      setPrevProps = _useState8[1];

  (0, _useOnclickoutside["default"])(ref, cancel);
  (0, _react.useEffect)(function () {
    // TODO: create a custom hook useMomentLocale
    // Moment.js hack to load locales when needed
    if (locale !== 'en') {
      try {
        // eslint-disable-next-line import/no-dynamic-require
        require("moment/locale/".concat(locale)); // eslint-disable-line global-require

      } catch (e) {
        console.warn("Wrong locale ".concat(locale, ", ").concat(e.message)); // eslint-disable-line no-console
      }
    }

    var onResizeWindow = function onResizeWindow() {
      setDayRange((0, _mediaTemplates.isMobile)() ? 4 : 7);
    };

    if (document.body) {
      document.body.style.overflow = 'hidden';
    }

    window.addEventListener('resize', onResizeWindow); // Specify how to clean up after this effect:

    return function cleanup() {
      if (document.body) {
        document.body.style.overflow = '';
      }

      window.removeEventListener('resize', onResizeWindow);
    };
  });

  if (!(0, _lodash2["default"])(prevProps, dates)) {
    setPrevProps(dates);
    setOrderedDates(Object.keys(dates).sort(function (a, b) {
      return (0, _moment["default"])(a, dateFormat) - (0, _moment["default"])(b, dateFormat);
    }));
  }

  var handleNextDays = function handleNextDays() {
    setIndex(Math.min(index + 1, Math.floor(orderedDates.length / dayRange)));
  };

  var handlePrevDays = function handlePrevDays() {
    setIndex(Math.max(index - 1, 0));
  };

  var getChunkDates = (0, _react.useMemo)(function () {
    return (0, _lodash["default"])(orderedDates, dayRange);
  }, [orderedDates, dayRange]);
  var isOdd;
  return _react["default"].createElement(_reactSwipeable.Swipeable, {
    onSwipedLeft: handleNextDays,
    onSwipedRight: handlePrevDays
  }, _react["default"].createElement(_CalendarUI.Container, null, _react["default"].createElement(_AppointmentUI["default"], {
    position: position,
    ref: ref,
    square: true
  }, _react["default"].createElement(AppointmentHeader, null, _react["default"].createElement(_ui["default"], {
    onClick: handlePrevDays,
    disabled: index === 0
  }, _react["default"].createElement(_ChevronLeftSharp["default"], null)), _react["default"].createElement(_ui["default"], {
    onClick: cancel
  }, _react["default"].createElement(_CloseSharp["default"], null)), _react["default"].createElement(_ui["default"], {
    onClick: handleNextDays,
    disabled: !getChunkDates[index + 1]
  }, _react["default"].createElement(_ChevronRightSharp["default"], null))), _react["default"].createElement(_AppointmentMonthHeader["default"], {
    chunkDates: getChunkDates,
    index: index,
    dateFormat: dateFormat
  }), _react["default"].createElement(_Days["default"], null, (getChunkDates[index] || []).map(function (day, nDay) {
    var separator = false;

    if (!nDay) {
      isOdd = (0, _moment["default"])(day, dateFormat).format('MM') % 2;
    } else if (isOdd !== (0, _moment["default"])(day, dateFormat).format('MM') % 2) {
      separator = true;
      isOdd = (0, _moment["default"])(day, dateFormat).format('MM') % 2;
    }

    return _react["default"].createElement(_DayTimes["default"], {
      key: "appointment-day-".concat(day),
      separator: separator
    }, _react["default"].createElement(_Day["default"], {
      isOdd: isOdd
    }, _react["default"].createElement("div", {
      className: "number"
    }, (0, _moment["default"])(day, dateFormat).format('DD')), _react["default"].createElement("div", {
      className: "name"
    }, (0, _moment["default"])(day, dateFormat).format('ddd'))), _react["default"].createElement(_Times["default"], null, dates[day].map(function (time) {
      return _react["default"].createElement(_Time["default"], {
        onClick: function onClick() {
          confirm("".concat(day, " ").concat(time));
        },
        key: "appointment-".concat(day, " ").concat(time)
      }, time);
    })));
  })))));
});
Appointment.propTypes = {
  confirm: _propTypes["default"].func.isRequired,
  cancel: _propTypes["default"].func,
  dateFormat: _propTypes["default"].string,
  locale: _propTypes["default"].string.isRequired,
  dates: _propTypes["default"].objectOf(_propTypes["default"].array).isRequired
};
Appointment.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: function cancel() {}
};
var _default = Appointment;
exports["default"] = _default;