import { checkValidCardType } from '../checkValidCardType';

describe('Credit Card Type Validation', () => {
  describe('Edge Cases', () => {
    test('should reject empty string', () => {
      expect(checkValidCardType('')).toBe(false);
    });

    test('should reject non-numeric strings', () => {
      expect(checkValidCardType('abcd')).toBe(false);
    });

    test('should reject card numbers with letters', () => {
      expect(checkValidCardType('4532a0151b1283c0366')).toBe(false);
    });
  });
});
