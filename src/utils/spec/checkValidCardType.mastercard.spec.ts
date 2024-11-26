import { checkValidCardType, cardPatterns } from '../checkValidCardType';

describe('Credit Card Type Validation', () => {
  describe('Mastercard Validation', () => {
    const validMastercardCards = {
      prefix51: '5105105105105100', // Starts with 51
      prefix52: '5205105105105100', // Starts with 52
      prefix53: '5305105105105100', // Starts with 53
      prefix54: '5405105105105100', // Starts with 54
      prefix55: '5505105105105100', // Starts with 55
      prefix2221: '2221005105105100', // Starts with 2221
      prefix2720: '2720995105105100', // Starts with 2720
    };

    const invalidMastercardCards = {
      wrongLength15: '510510510510510', // 15 digits
      wrongLength17: '51051051051051001', // 17 digits
      wrongPrefix50: '5005105105105100', // Starts with 50
      wrongPrefix56: '5605105105105100', // Starts with 56
      wrongPrefix2220: '2220005105105100', // Starts with 2220
      wrongPrefix2721: '2721005105105100', // Starts with 2721
    };

    test.each(Object.entries(validMastercardCards))(
      'should validate correct %s Mastercard',
      (_, cardNumber) => {
        expect(checkValidCardType(cardNumber)).toBe(true);
        expect(cardPatterns.mastercard.test(cardNumber)).toBe(true);
      },
    );

    test.each(Object.entries(invalidMastercardCards))(
      'should reject invalid %s Mastercard',
      (_, cardNumber) => {
        expect(cardPatterns.mastercard.test(cardNumber)).toBe(false);
      },
    );
  });
});
