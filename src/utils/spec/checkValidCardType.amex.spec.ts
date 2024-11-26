import { checkValidCardType, cardPatterns } from '../checkValidCardType';

describe('Credit Card Type Validation', () => {
  describe('American Express Validation', () => {
    const validAmexCards = {
      prefix34: '348282246310005', // Starts with 34
      prefix37: '371449635398431', // Starts with 37
    };

    const invalidAmexCards = {
      wrongLength14: '34828224631000', // 14 digits
      wrongLength16: '3482822463100051', // 16 digits
      wrongPrefix33: '338282246310005', // Starts with 33
      wrongPrefix35: '358282246310005', // Starts with 35
      wrongPrefix36: '368282246310005', // Starts with 36
      wrongPrefix38: '388282246310005', // Starts with 38
    };

    test.each(Object.entries(validAmexCards))(
      'should validate correct %s American Express card',
      (_, cardNumber) => {
        expect(checkValidCardType(cardNumber)).toBe(true);
        expect(cardPatterns.amex.test(cardNumber)).toBe(true);
      },
    );

    test.each(Object.entries(invalidAmexCards))(
      'should reject invalid %s American Express card',
      (_, cardNumber) => {
        expect(cardPatterns.amex.test(cardNumber)).toBe(false);
      },
    );
  });
});
