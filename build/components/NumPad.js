"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPortal = require("react-portal");

var _styledComponents = require("styled-components");

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _elements = require("../elements");

var _globalCss = _interopRequireDefault(require("../styles/global-css"));

var _styles = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getTransition = function getTransition(show, position) {
  var transition = _Slide["default"];
  var transitionProps = {
    "in": show,
    direction: 'up',
    mountOnEnter: true,
    unmountOnExit: true
  };

  if (position === 'flex-start') {
    transitionProps.direction = 'down';
  }

  if (position !== 'flex-start' && position !== 'flex-end') {
    transition = 'span';
    transitionProps = {};
  }

  return {
    transition: transition,
    transitionProps: transitionProps
  };
};

var NumPad = function NumPad(_ref) {
  var children = _ref.children,
      placeholder = _ref.placeholder,
      label = _ref.label,
      disabled = _ref.disabled,
      theme = _ref.theme,
      locale = _ref.locale,
      markers = _ref.markers,
      position = _ref.position,
      sync = _ref.sync,
      customInput = _ref.customInput,
      onChange = _ref.onChange,
      valueFromProps = _ref.value,
      formatInputValue = _ref.formatInputValue,
      displayRule = _ref.displayRule;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(formatInputValue(valueFromProps)),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      preValue = _useState6[0],
      setPreValue = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      customTheme = _useState8[0],
      setCustomTheme = _useState8[1];

  var inputRef = (0, _react.useRef)();
  var contentRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (show && value !== formatInputValue(valueFromProps)) {
      setValue(formatInputValue(valueFromProps));
    }
  }, [show]);

  if (valueFromProps !== preValue) {
    setPreValue(valueFromProps);
    setValue(formatInputValue(valueFromProps));
  }

  var toggleKeyPad = function toggleKeyPad() {
    setShow(!show);
  };

  var confirm = function confirm(val) {
    if (show) {
      toggleKeyPad();
      onChange(displayRule(val));
    }
  }; // Update internal state, if sync is true call the external onChange callback on each change


  var update = (0, _react.useCallback)(function (val) {
    setValue(val);

    if (sync) {
      onChange(displayRule(val));
    }
  }, [sync]);
  (0, _react.useLayoutEffect)(function () {
    if (contentRef.current) {
      var _contentRef$current$g = contentRef.current.getBoundingClientRect(),
          width = _contentRef$current$g.width,
          height = _contentRef$current$g.height;

      var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
          top = _inputRef$current$get.top,
          bottom = _inputRef$current$get.bottom,
          left = _inputRef$current$get.left,
          right = _inputRef$current$get.right;

      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight,
          pageXOffset = _window.pageXOffset,
          pageYOffset = _window.pageYOffset;
      var newCoords = {
        startBottomLeft: {
          top: "".concat(Math.min(innerHeight - height, bottom + pageYOffset), "px"),
          left: "".concat(Math.min(innerWidth - width, left + pageXOffset), "px")
        },
        startBottomRight: {
          top: "".concat(Math.min(innerHeight - height, bottom + pageYOffset), "px"),
          right: "".concat(Math.min(innerWidth - right + pageXOffset, innerWidth - width), "px")
        },
        startTopLeft: {
          top: "".concat(Math.max(top + pageYOffset - height, pageYOffset), "px"),
          left: "".concat(Math.min(innerWidth - width, left + pageXOffset), "px")
        },
        startTopRight: {
          top: "".concat(Math.max(top + pageYOffset - height, pageYOffset), "px"),
          right: "".concat(Math.min(innerWidth - right + pageXOffset, innerWidth - width), "px")
        }
      }[position];
      setCustomTheme(_objectSpread({}, customTheme, {
        coords: newCoords
      }));
    } else {
      var newTheme = _typeof(theme) === 'object' ? theme : (0, _styles["default"])(theme);
      setCustomTheme(newTheme);
    }
  }, [show]);
  var display = position !== 'flex-start' && position !== 'flex-end' ? show : true;

  var _getTransition = getTransition(show, position),
      transition = _getTransition.transition,
      transitionProps = _getTransition.transitionProps;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_globalCss["default"], {
    display: display
  }), _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: customTheme
  }, _react["default"].createElement(_elements.InputField, {
    placeholder: placeholder,
    showKeyPad: toggleKeyPad,
    inputValue: valueFromProps.toString(),
    label: label,
    disabled: show || disabled,
    customInput: customInput,
    ref: inputRef
  })), _react["default"].createElement(_reactPortal.Portal, null, display && _react["default"].createElement(transition, _objectSpread({}, transitionProps), _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: customTheme
  }, _react["default"].createElement(_elements.Wrapper, {
    show: true,
    position: position
  }, _react["default"].cloneElement(children, {
    cancel: toggleKeyPad,
    confirm: confirm,
    update: update,
    value: value,
    position: position,
    label: label,
    locale: locale,
    markers: markers,
    sync: sync,
    ref: contentRef
  }))))));
};

NumPad.defaultProps = {
  children: undefined,
  customInput: undefined,
  placeholder: undefined,
  position: 'center',
  formatInputValue: function formatInputValue(value) {
    return value.toString();
  },
  label: undefined,
  theme: undefined,
  locale: 'en',
  value: '',
  sync: false,
  markers: [],
  disabled: false
};
NumPad.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  customInput: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  placeholder: _propTypes["default"].string,
  position: _propTypes["default"].string,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  formatInputValue: _propTypes["default"].func,
  theme: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  sync: _propTypes["default"].bool,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].string),
  displayRule: _propTypes["default"].func.isRequired
};
var _default = NumPad;
exports["default"] = _default;