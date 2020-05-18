"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.padding = exports.display = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VALIDATION_DATE = '20200301010203';
var VALIDATION_FORMAT = 'YYYYMMDDHHmmss';

var display = function display(value, dateFormat) {
  var newValue = '';

  for (var i = 0, offset = 0; i < dateFormat.length; i += 1) {
    if (dateFormat[i].search(/[a-z_]/gi) === -1 || !value[offset]) {
      newValue += dateFormat[i];
    } else {
      newValue += value[offset];
      offset += 1;
    }
  }

  return newValue;
};

exports.display = display;

var padding = function padding(value, dateFormat) {
  var cleanedDateFormat = dateFormat.replace(/[^a-z]/gi, '');
  var checkDate = (0, _moment["default"])(VALIDATION_DATE, VALIDATION_FORMAT).format(cleanedDateFormat);
  return value + checkDate.substring(value.length, cleanedDateFormat.length);
};

exports.padding = padding;

var validate = function validate(value) {
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var position = arguments.length > 2 ? arguments[2] : undefined;
  var cleanedDateFormat = dateFormat.replace(/[^a-z]/gi, '');
  var nextDate = (0, _moment["default"])(value, cleanedDateFormat);

  if (value.length !== cleanedDateFormat.length) {
    return false;
  }

  var monthAt = cleanedDateFormat.search('MM');

  if (nextDate.isValid() === false && monthAt === position) {
    var valueParts = value.split('');
    return !!['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].find(function (month) {
      valueParts[monthAt + 1] = month;
      var findValidDate = valueParts.join('');
      return (0, _moment["default"])(findValidDate, cleanedDateFormat).isValid();
    });
  }

  var dayStartAt = cleanedDateFormat.indexOf('D');
  var dayEndAt = cleanedDateFormat.lastIndexOf('D');
  var monthStartAt = cleanedDateFormat.indexOf('M');
  var monthEndAt = cleanedDateFormat.lastIndexOf('M');
  var yearStartAt = cleanedDateFormat.indexOf('Y');
  var yearEndAt = cleanedDateFormat.lastIndexOf('Y');
  var day = value.substring(dayStartAt, dayEndAt + 1);
  var month = value.substring(monthStartAt, monthEndAt + 1);

  if (day === '29' && (month === '02' || month === '2') && position >= yearStartAt && position < yearEndAt) {
    // is always true correct ?
    return true;
  }

  return nextDate.isValid();
};

exports.validate = validate;