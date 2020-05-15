"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useLongPress;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useLongPress() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      startLogPress = _useState2[0],
      setStartLongPress = _useState2[1];

  (0, _react.useEffect)(function () {
    var timerId;

    if (startLogPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return function () {
      clearTimeout(timerId);
    };
  }, [startLogPress]);
  return {
    onMouseDown: function onMouseDown() {
      return setStartLongPress(true);
    },
    onMouseUp: function onMouseUp() {
      return setStartLongPress(false);
    },
    onMouseLeave: function onMouseLeave() {
      return setStartLongPress(false);
    },
    onTouchStart: function onTouchStart() {
      return setStartLongPress(true);
    },
    onTouchEnd: function onTouchEnd() {
      return setStartLongPress(false);
    }
  };
}