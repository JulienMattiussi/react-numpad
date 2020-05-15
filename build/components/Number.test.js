"use strict";

var _Number = require("./Number");

test('Positive Validation', function () {
  expect((0, _Number.positiveValidation)('1')).toBe(true);
  expect((0, _Number.positiveValidation)('1.2')).toBe(true);
  expect((0, _Number.positiveValidation)('0.2')).toBe(true);
  expect((0, _Number.positiveValidation)('0')).toBe(true);
  expect((0, _Number.positiveValidation)('-0.2')).toBe(false);
  expect((0, _Number.positiveValidation)('-2')).toBe(false);
});
test('Integer Validation', function () {
  expect((0, _Number.integerValidation)('1')).toBe(true);
  expect((0, _Number.integerValidation)('0.1')).toBe(false);
  expect((0, _Number.integerValidation)('0')).toBe(true);
  expect((0, _Number.integerValidation)('0.0')).toBe(true);
  expect((0, _Number.integerValidation)('-0.1')).toBe(false);
  expect((0, _Number.integerValidation)('-1')).toBe(true);
});
test('Number validator factory (decimal=false, sign=false)', function () {
  expect((0, _Number.numberValidator)(false, false)('2.2')).toBe(false);
  expect((0, _Number.numberValidator)(false, false)('2')).toBe(true);
  expect((0, _Number.numberValidator)(false, false)('0')).toBe(true);
  expect((0, _Number.numberValidator)(false, false)('-2')).toBe(false);
  expect((0, _Number.numberValidator)(false, false)('-2.2')).toBe(false);
});
test('Number validator factory (decimal=true, sign=false)', function () {
  expect((0, _Number.numberValidator)(true, false)('2.2')).toBe(true);
  expect((0, _Number.numberValidator)(true, false)('2')).toBe(true);
  expect((0, _Number.numberValidator)(true, false)('0')).toBe(true);
  expect((0, _Number.numberValidator)(true, false)('-2')).toBe(false);
  expect((0, _Number.numberValidator)(true, false)('-2.2')).toBe(false);
});
test('Number validator factory (decimal=false, sign=true)', function () {
  expect((0, _Number.numberValidator)(false, true)('2.2')).toBe(false);
  expect((0, _Number.numberValidator)(false, true)('2')).toBe(true);
  expect((0, _Number.numberValidator)(false, true)('0')).toBe(true);
  expect((0, _Number.numberValidator)(false, true)('-2')).toBe(true);
  expect((0, _Number.numberValidator)(false, true)('-2.2')).toBe(false);
});
test('Number validator factory (decimal=true, sign=true)', function () {
  expect((0, _Number.numberValidator)(true, true)('2.2')).toBe(true);
  expect((0, _Number.numberValidator)(true, true)('2')).toBe(true);
  expect((0, _Number.numberValidator)(true, true)('0')).toBe(true);
  expect((0, _Number.numberValidator)(true, true)('-2')).toBe(true);
  expect((0, _Number.numberValidator)(true, true)('-2.2')).toBe(true);
});
test('Bugfix: Number.isNaN("3.3....3") === false', function () {
  expect((0, _Number.numberValidator)()('2.2.8')).toBe(false);
});
test('Decimal precision', function () {
  expect((0, _Number.numberValidator)(1)('2.2')).toBe(true);
  expect((0, _Number.numberValidator)(1)('2.21')).toBe(false);
  expect((0, _Number.numberValidator)(10)('2.1234567890')).toBe(true);
  expect((0, _Number.numberValidator)(10)('2.1234567890133443')).toBe(false);
  expect((0, _Number.numberValidator)(10)('1234567.12345')).toBe(true);
  expect((0, _Number.numberValidator)(1)('1234567')).toBe(true);
});