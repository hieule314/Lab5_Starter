// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber true: dashed phone format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber true: parenthesized area code format', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber false: no separators', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber false: non-numeric input', () => {
  expect(isPhoneNumber('hello world')).toBe(false);
});

test('isEmail true: standard email', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('isEmail true: underscore username', () => {
  expect(isEmail('user_name@mail.com')).toBe(true);
});

test('isEmail false: missing top-level domain', () => {
  expect(isEmail('name@mail')).toBe(false);
});

test('isEmail false: invalid at-sign usage', () => {
  expect(isEmail('name@@mail.com')).toBe(false);
});

test('isStrongPassword true: minimum valid length', () => {
  expect(isStrongPassword('Abc1')).toBe(true);
});

test('isStrongPassword true: underscore and numbers allowed', () => {
  expect(isStrongPassword('a_goodPass12')).toBe(true);
});

test('isStrongPassword false: starts with number', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

test('isStrongPassword false: too short', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('isDate true: single-digit month/day', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('isDate true: double-digit month/day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate false: wrong order', () => {
  expect(isDate('2024/01/01')).toBe(false);
});

test('isDate false: wrong separator', () => {
  expect(isDate('1-2-2024')).toBe(false);
});

test('isHexColor true: 3-digit with hash', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor true: 6-digit without hash', () => {
  expect(isHexColor('1a2b3c')).toBe(true);
});

test('isHexColor false: invalid length', () => {
  expect(isHexColor('#12')).toBe(false);
});

test('isHexColor false: non-hex characters', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
