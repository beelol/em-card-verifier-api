import { luhnCheck } from './luhnCheck';

const validVisa = '4532015112830366';
const invalidVisa = '4532015112830367';
const validMastercard = '5555555555554444';
const invalidMastercard = '5555555555554445';
const validAmex = '378282246310005';
const invalidAmex = '378282246310006';
const validDiscover = '6011111111111117';
const invalidDiscover = '6011111111111118';
const validJcb = '3530111333300000';
const invalidJcb = '3530111333300001';
const validShortNumber = '79927398713';
const invalidShortNumber = '79927398714';
const emptyString = '';
const nonNumericString = 'abcd';
const singleDigit = '0';
const validNumberWithLeadingZeros = '00004532015112830366';

describe('luhnCheck', () => {
  test('valid credit card number', () => {
    expect(luhnCheck(validVisa)).toBe(true);
  });

  test('invalid credit card number', () => {
    expect(luhnCheck(invalidVisa)).toBe(false);
  });

  test('valid Mastercard number', () => {
    expect(luhnCheck(validMastercard)).toBe(true);
  });

  test('invalid Mastercard number', () => {
    expect(luhnCheck(invalidMastercard)).toBe(false);
  });

  test('valid Amex number', () => {
    expect(luhnCheck(validAmex)).toBe(true);
  });

  test('invalid Amex number', () => {
    expect(luhnCheck(invalidAmex)).toBe(false);
  });

  test('valid Discover number', () => {
    expect(luhnCheck(validDiscover)).toBe(true);
  });

  test('invalid Discover number', () => {
    expect(luhnCheck(invalidDiscover)).toBe(false);
  });

  test('valid JCB number', () => {
    expect(luhnCheck(validJcb)).toBe(true);
  });

  test('invalid JCB number', () => {
    expect(luhnCheck(invalidJcb)).toBe(false);
  });

  test('valid short number', () => {
    expect(luhnCheck(validShortNumber)).toBe(true);
  });

  test('invalid short number', () => {
    expect(luhnCheck(invalidShortNumber)).toBe(false);
  });

  test('empty string', () => {
    expect(luhnCheck(emptyString)).toBe(false);
  });

  test('non-numeric string', () => {
    expect(luhnCheck(nonNumericString)).toBe(false);
  });

  test('single digit', () => {
    expect(luhnCheck(singleDigit)).toBe(false);
  });

  test('valid number with leading zeros', () => {
    expect(luhnCheck(validNumberWithLeadingZeros)).toBe(true);
  });
});
