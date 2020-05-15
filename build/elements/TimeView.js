"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ChevronLeftSharp = _interopRequireDefault(require("@material-ui/icons/ChevronLeftSharp"));

var _ui = _interopRequireDefault(require("./ui"));

var _CalendarUI = require("./CalendarUI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(intervalIterator);

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: white;\n  text-align: center;\n  padding: 5px;\n  &:hover {\n    color: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-template: repeat(8, 1fr) / repeat(3, 1fr);\n  flex-grow: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TimeTable = _styledComponents["default"].div(_templateObject());

var Hour = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.body.highlightColor;
}, function (props) {
  return props.theme.body.highlightColor;
});

function intervalIterator(date, minutes) {
  var current, end;
  return regeneratorRuntime.wrap(function intervalIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          current = date.clone().startOf('day');
          end = date.clone().endOf('day');

        case 2:
          if (!current.isBefore(end)) {
            _context.next = 8;
            break;
          }

          _context.next = 5;
          return current.clone();

        case 5:
          current.add(minutes, 'minutes');
          _context.next = 2;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var times = function times(date, interval) {
  return Array.from(intervalIterator(date, interval));
};

var MINUTES_INTERVAL = 60;
/** TODO: allow to set minutes interval as props */

var TimeView = function TimeView(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange,
      handleBackTime = _ref.handleBackTime;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CalendarUI.Header, null, _react["default"].createElement(_ui["default"], {
    onClick: handleBackTime
  }, _react["default"].createElement(_ChevronLeftSharp["default"], null))), _react["default"].createElement(TimeTable, null, times(date, MINUTES_INTERVAL).map(function (hour) {
    return _react["default"].createElement(Hour, {
      key: hour.format('HH:mm'),
      onClick: function onClick() {
        return onChange(hour);
      }
    }, hour.format('HH:mm'));
  })));
};

TimeView.propTypes = {
  date: _propTypes["default"].object.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  handleBackTime: _propTypes["default"].func.isRequired
};
var _default = TimeView;
exports["default"] = _default;