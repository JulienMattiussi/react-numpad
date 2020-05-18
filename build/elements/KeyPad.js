"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useOnclickoutside = _interopRequireDefault(require("use-onclickoutside"));

var _CheckSharp = _interopRequireDefault(require("@material-ui/icons/CheckSharp"));

var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _KeypadButton = _interopRequireDefault(require("./KeypadButton"));

var _Display = _interopRequireDefault(require("./Display"));

var _mediaTemplates = require("../styles/media-templates");

var _ui = _interopRequireDefault(require("./ui"));

var _useKeyboardInput = _interopRequireDefault(require("../hooks/useKeyboardInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  background: ", ";\n  button {\n    border-bottom: 1px solid #ddd;\n    border-right: 1px solid #ddd;\n  }\n  button:nth-child(3n) {\n    border-right: none;\n  }\n  button:nth-child(-n + 3) {\n    border-top: 1px solid #ddd;\n  }\n  order: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: ", " ", "\n    ", " ", ";\n  align-items: center;\n  color: ", ";\n  background: ", ";\n  user-select: none;\n  order: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  font-size: 1.3em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["width: 100%;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  ", "\n\n  ", "\n\n  background: ", ";\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = (0, _styledComponents["default"])(_Paper["default"])(_templateObject(), function (props) {
  return props.theme.global.flexDirection;
}, _mediaTemplates.media.mobile(_templateObject2()), function (props) {
  return props.position === 'fullscreen' ? "\n  width: 100vw;\n  height: 100vh;\n  font-size: 1.2em;\n  " : "\n      width: 264px;\n    height: 300px;\n  ";
}, function (props) {
  return props.theme.body.backgroundColor;
});
var IconCheckStyled = (0, _styledComponents["default"])(_CheckSharp["default"])(_templateObject3(), function (props) {
  return "".concat(props.theme.header.buttonSize, " !important");
}, function (props) {
  return "".concat(props.theme.header.buttonSize, " !important");
});
var IconCloseStyled = (0, _styledComponents["default"])(_CloseSharp["default"])(_templateObject4(), function (props) {
  return "".concat(props.theme.header.buttonSize, " !important");
}, function (props) {
  return "".concat(props.theme.header.buttonSize, " !important");
});

var Label = _styledComponents["default"].div(_templateObject5()); // TODO use material-ui colors


var Header = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.header.paddingTop;
}, function (props) {
  return props.theme.header.paddingRight;
}, function (props) {
  return props.theme.header.paddingBottom;
}, function (props) {
  return props.theme.header.paddingLeft;
}, function (props) {
  return props.theme.header.primaryColor;
}, function (props) {
  return props.theme.header.backgroundColor;
}, function (props) {
  return props.theme.header.order;
});

var Keys = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.header.secondaryColor;
}, function (props) {
  return props.theme.body.order;
});

var KeyPad = (0, _react.forwardRef)(function KeyPad(_ref, ref) {
  var displayRule = _ref.displayRule,
      position = _ref.position,
      validation = _ref.validation,
      confirmOutside = _ref.confirmOutside,
      label = _ref.label,
      confirm = _ref.confirm,
      cancel = _ref.cancel,
      keyValid = _ref.keyValid,
      value = _ref.value,
      update = _ref.update,
      sync = _ref.sync;
  // @ts-ignore
  var keypadKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '-', '0', '.'];

  var keyboardKeys = _toConsumableArray(Array(10).keys()).map(function (v) {
    return v.toString();
  });

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var keyboard = (0, _useKeyboardInput["default"])(inputValue, keyboardKeys.filter(function (key) {
    return keyValid(inputValue, key);
  }));

  function computeNextKey(newValue, key) {
    var computedValue;

    if (keyValid(inputValue, key)) {
      if (key === '-') {
        computedValue = inputValue.charAt(0) === '-' ? inputValue.substr(1) : "-".concat(inputValue);
      } else if (key === '.') {
        var leadingZero = ['', '-'].includes(inputValue);
        computedValue = "".concat(inputValue).concat(leadingZero ? '0' : '').concat(key);
      } else {
        computedValue = newValue;
      }

      setInputValue(computedValue);

      if (sync) {
        update(computedValue);
      }
    }
  }

  (0, _useOnclickoutside["default"])(ref, function (e) {
    if (validation(inputValue) && confirmOutside) {
      confirm(inputValue);
    } else {
      cancel();
    }
  }); // Reload props.value into the state

  (0, _react.useEffect)(function () {
    setInputValue(value);
  }, [value]);
  (0, _react.useEffect)(function () {
    if (keyboard.keyDownEvent) {
      /** useKeyBaordInput set null when initializing the initialValue to avoid this computation before validation  */
      if (['Enter', 'Tab'].includes(keyboard.keyDownEvent.key) && validation(keyboard.value)) {
        confirm(keyboard.value);
      } else if (['Escape'].includes(keyboard.keyDownEvent.key)) {
        cancel();
      } else if (['Backspace'].includes(keyboard.keyDownEvent.key)) {
        if (keyboard.keyDownEvent.ctrlKey || keyboard.keyDownEvent.altKey) {
          setInputValue('');
        } else {
          setInputValue(keyboard.value);
        }
      } else {
        computeNextKey(keyboard.value, keyboard.keyDownEvent.key);
      }
    }
  }, [keyboard.value, keyboard.keyDownEvent]);
  var onButtonClick = (0, _react.useCallback)(function (clickedKey) {
    return keyboard.virtualInteraction(clickedKey.toString());
  }, []);
  return _react["default"].createElement(Content, {
    position: position,
    ref: ref,
    square: true
  }, _react["default"].createElement(Header, null, _react["default"].createElement(_ui["default"], null, _react["default"].createElement(IconCloseStyled, {
    onClick: cancel
  })), _react["default"].createElement(Label, null, label), _react["default"].createElement(_ui["default"], {
    onClick: function onClick() {
      return confirm(inputValue);
    },
    disabled: !validation(inputValue)
  }, _react["default"].createElement(IconCheckStyled, null))), _react["default"].createElement(_Display["default"], {
    value: displayRule(inputValue),
    backspace: function backspace() {
      return keyboard.virtualInteraction('Backspace');
    },
    longPressBackspace: function longPressBackspace() {
      return setInputValue('');
    }
  }), _react["default"].createElement(Keys, null, keypadKeys.map(function (key) {
    return _react["default"].createElement(_KeypadButton["default"], {
      key: "button-".concat(key),
      click: onButtonClick,
      value: key,
      disabled: !keyValid(inputValue, key)
    });
  })));
});
KeyPad.displayName = 'KeyPad'; // TODO: necessary?

KeyPad.propTypes = {
  label: _propTypes["default"].string,
  confirm: _propTypes["default"].func.isRequired,
  cancel: _propTypes["default"].func,
  displayRule: _propTypes["default"].func.isRequired,
  validation: _propTypes["default"].func.isRequired,
  keyValid: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  sync: _propTypes["default"].bool,
  update: _propTypes["default"].func.isRequired,
  position: _propTypes["default"].string.isRequired,
  confirmOutside: _propTypes["default"].bool
};
KeyPad.defaultProps = {
  label: undefined,
  value: '',
  sync: false,
  cancel: function cancel() {},
  confirmOutside: true
};
var _default = KeyPad;
exports["default"] = _default;