"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
test('number', function _callee() {
  var _render, container, getByText, getByRole, getByTestId, debug, display;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _render = (0, _react2.render)(_react["default"].createElement(_index["default"].Number, null)), container = _render.container, getByText = _render.getByText, getByRole = _render.getByRole, getByTestId = _render.getByTestId, debug = _render.debug;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          // debug();
          _react2.fireEvent.click(getByText('1'));

          display = getByRole('display');
          expect(display.value).toBe('1');

          _react2.fireEvent.keyDown(container, {
            key: '3'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('-132');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('-132.');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('-132.');

          _react2.fireEvent.keyDown(container, {
            key: '0'
          });

          expect(display.value).toBe('-132.0');

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
});
test('decimal with negative', function _callee2() {
  var _render2, container, getByText, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _render2 = (0, _react2.render)(_react["default"].createElement(_index["default"].Number, {
            decimal: 2
          })), container = _render2.container, getByText = _render2.getByText, getByRole = _render2.getByRole, getByTestId = _render2.getByTestId;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          display = getByRole('display');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('0.');

          _react2.fireEvent.keyDown(container, {
            key: '3'
          });

          expect(display.value).toBe('0.3');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-0.3');

          _react2.fireEvent.keyDown(container, {
            key: '1'
          });

          expect(display.value).toBe('-0.31');

          _react2.fireEvent.keyDown(container, {
            key: '1'
          });

          expect(display.value).toBe('-0.31');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('0.31');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-0.31');

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  });
});
test('oddValidator', function _callee3() {
  var oddValidator, _render3, container, getByText, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          oddValidator = function oddValidator(value) {
            return parseInt(value, 10) % 2 !== 0 && parseFloat(value) % 1 === 0;
          };

          _render3 = (0, _react2.render)(_react["default"].createElement(_index["default"].Number, {
            keyValidator: oddValidator
          })), container = _render3.container, getByText = _render3.getByText, getByRole = _render3.getByRole, getByTestId = _render3.getByTestId;
          _context3.next = 4;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 4:
          _react2.fireEvent.click(getByText('1'));

          display = getByRole('display');
          expect(display.value).toBe('1');

          _react2.fireEvent.keyDown(container, {
            key: '3'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-13');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '5'
          });

          expect(display.value).toBe('135');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-135');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('135');

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          expect(display.value).toBe('13');

        case 29:
        case "end":
          return _context3.stop();
      }
    }
  });
});
test('positive number', function _callee4() {
  var _render4, container, getByText, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _render4 = (0, _react2.render)(_react["default"].createElement(_index["default"].Number, {
            negative: false
          })), container = _render4.container, getByText = _render4.getByText, getByRole = _render4.getByRole, getByTestId = _render4.getByTestId;
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          display = getByRole('display');

          _react2.fireEvent.click(getByText('.'));

          expect(display.value).toBe('0.');

          _react2.fireEvent.click(getByText('-'));

          expect(display.value).toBe('0.');

          _react2.fireEvent.click(getByText('.'));

          expect(display.value).toBe('0.');

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          expect(display.value).toBe('0');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('1');

          _react2.fireEvent.keyDown(container, {
            key: '3'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('132');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('132.');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('132.');

          _react2.fireEvent.keyDown(container, {
            key: '0'
          });

          expect(display.value).toBe('132.0');

        case 26:
        case "end":
          return _context4.stop();
      }
    }
  });
});
test('positive integer', function _callee5() {
  var _render5, container, getByText, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _render5 = (0, _react2.render)(_react["default"].createElement(_index["default"].Number, {
            negative: false,
            decimal: false
          })), container = _render5.container, getByText = _render5.getByText, getByRole = _render5.getByRole, getByTestId = _render5.getByTestId;
          _context5.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          display = getByRole('display');

          _react2.fireEvent.click(getByText('-'));

          expect(display.value).toBe('');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('1');

          _react2.fireEvent.keyDown(container, {
            key: '3'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('13');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('132');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('132');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('132');

          _react2.fireEvent.keyDown(container, {
            key: '0'
          });

          expect(display.value).toBe('1320');

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  });
});
test('time', function _callee6() {
  var _render6, container, getByText, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _render6 = (0, _react2.render)(_react["default"].createElement(_index["default"].DateTime, {
            dateFormat: "HH:mm"
          })), container = _render6.container, getByText = _render6.getByText, getByRole = _render6.getByRole, getByTestId = _render6.getByTestId;
          _context6.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          display = getByRole('display');

          _react2.fireEvent.click(getByText('6'));

          expect(display.value).toBe('__:__');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('1_:__');

          _react2.fireEvent.keyDown(container, {
            key: '3'
          });

          expect(display.value).toBe('13:__');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('13:__');

          _react2.fireEvent.keyDown(container, {
            key: '9'
          });

          expect(display.value).toBe('13:__');

          _react2.fireEvent.keyDown(container, {
            key: '2'
          });

          expect(display.value).toBe('13:2_');

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          expect(display.value).toBe('13:__');

          _react2.fireEvent.keyDown(container, {
            key: '1'
          });

          expect(display.value).toBe('13:1_');

          _react2.fireEvent.keyDown(container, {
            key: '0'
          });

          expect(display.value).toBe('13:10');

          _react2.fireEvent.keyDown(container, {
            key: '0'
          });

          expect(display.value).toBe('13:10');

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          expect(display.value).toBe('13:1_');

        case 26:
        case "end":
          return _context6.stop();
      }
    }
  });
});
test('date time CH format', function _callee7() {
  var _render7, container, getByText, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _render7 = (0, _react2.render)(_react["default"].createElement(_index["default"].DateTime, {
            dateFormat: "DD.MM.YYYY HH:mm"
          })), container = _render7.container, getByText = _render7.getByText, getByRole = _render7.getByRole, getByTestId = _render7.getByTestId;
          _context7.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          display = getByRole('display');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('1_.__.____ __:__');

          _react2.fireEvent.click(getByText('4'));

          expect(display.value).toBe('14.__.____ __:__');

          _react2.fireEvent.click(getByText('4'));

          expect(display.value).toBe('14.__.____ __:__');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('14.1_.____ __:__');

          _react2.fireEvent.click(getByText('3'));

          expect(display.value).toBe('14.1_.____ __:__');

          _react2.fireEvent.click(getByText('2'));

          expect(display.value).toBe('14.12.____ __:__');

          _react2.fireEvent.click(getByText('2'));

          expect(display.value).toBe('14.12.2___ __:__');

          _react2.fireEvent.click(getByText('2'));

          expect(display.value).toBe('14.12.22__ __:__');

          _react2.fireEvent.click(getByText('2'));

          expect(display.value).toBe('14.12.222_ __:__');

          _react2.fireEvent.click(getByText('2'));

          expect(display.value).toBe('14.12.2222 __:__');

          _react2.fireEvent.click(getByText('6'));

          expect(display.value).toBe('14.12.2222 __:__');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('14.12.2222 1_:__');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('14.12.2222 11:__');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('14.12.2222 11:1_');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('14.12.2222 11:11');

          _react2.fireEvent.click(getByText('1'));

          expect(display.value).toBe('14.12.2222 11:11');

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          _react2.fireEvent.keyDown(container, {
            key: 'Backspace'
          });

          expect(display.value).toBe('14.12.2222 1_:__');

        case 40:
        case "end":
          return _context7.stop();
      }
    }
  });
});
test('minus sign', function _callee8() {
  var _render8, container, getByRole, getByTestId, display;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _render8 = (0, _react2.render)(_react["default"].createElement(_index["default"].Number, null)), container = _render8.container, getByRole = _render8.getByRole, getByTestId = _render8.getByTestId;
          _context8.next = 3;
          return regeneratorRuntime.awrap((0, _react2.wait)(function () {
            _react2.fireEvent.click(getByTestId('input-field'));
          }));

        case 3:
          display = getByRole('display');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('-');

          _react2.fireEvent.keyDown(container, {
            key: '.'
          });

          expect(display.value).toBe('-0.');

          _react2.fireEvent.keyDown(container, {
            key: '-'
          });

          expect(display.value).toBe('0.');

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  });
});