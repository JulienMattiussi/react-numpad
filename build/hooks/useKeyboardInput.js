"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useKeyboardInput;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useKeyboardInput(initialValue) {
  var validKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var refValue = (0, _react.useRef)(initialValue);
  var refValidKeys = (0, _react.useRef)(validKeys);

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      keyDownEvent = _useState4[0],
      setKeyDownEvent = _useState4[1];

  (0, _react.useEffect)(function () {
    setKeyDownEvent(null);
    /** Necessary to avoid computation of useEffect on initalValue change when event is old --> see test of '-' sign */

    setValue(initialValue);
  }, [initialValue]);
  (0, _react.useEffect)(function () {
    refValue.current = value;
  }, [value]);
  (0, _react.useEffect)(function () {
    refValidKeys.current = validKeys;
  }, [validKeys]);

  function keyDownHandler(event) {
    var key = event.key;
    setKeyDownEvent(event);

    if (key === 'Backspace') {
      setValue(refValue.current.slice(0, -1));
    } else if (refValidKeys.current.length > 0) {
      if (refValidKeys.current.includes(key)) {
        setValue(refValue.current + key);
      }
    }
  }

  function virtualInteraction(key) {
    keyDownHandler(new KeyboardEvent('keydown', {
      key: key
    }));
  }

  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', keyDownHandler);
    return function cleanup() {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
  return {
    value: value,
    keyDownEvent: keyDownEvent,
    virtualInteraction: virtualInteraction
  };
}