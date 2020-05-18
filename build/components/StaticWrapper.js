"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _styles = _interopRequireDefault(require("../styles"));

var _Wrapper = require("../elements/Wrapper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var StaticWrapper = function StaticWrapper(_ref) {
  var theme = _ref.theme,
      position = _ref.position,
      onChange = _ref.onChange,
      displayRule = _ref.displayRule,
      sync = _ref.sync,
      children = _ref.children,
      locale = _ref.locale;
  var contentRef = (0, _react.useRef)();
  var customTheme = _typeof(theme) === 'object' ? theme : (0, _styles["default"])(theme);
  var confirm = (0, _react.useCallback)(function (val) {
    onChange(displayRule(val));
  }, []); // Update internal state, if sync is true call the external onChange callback on each change

  var update = (0, _react.useCallback)(function (val) {
    if (sync) {
      onChange(displayRule(val));
    }
  }, [sync]);
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: customTheme
  }, _react["default"].createElement(_Wrapper.Content, {
    position: position
  }, _react["default"].cloneElement(children, {
    update: update,
    confirm: confirm,
    locale: locale,
    position: position,
    ref: contentRef
  })));
};

StaticWrapper.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  theme: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  position: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  sync: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  displayRule: _propTypes["default"].func.isRequired
};
StaticWrapper.defaultProps = {
  theme: undefined,
  position: undefined,
  children: undefined,
  sync: false,
  locale: 'en'
};
var _default = StaticWrapper;
exports["default"] = _default;