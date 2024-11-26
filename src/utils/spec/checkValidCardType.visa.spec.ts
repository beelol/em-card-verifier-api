import { checkValidCardType, cardPatterns } from '../checkValidCardType';

describe('Credit Card Type Validation', () => {
  describe('Visa Validation', () => {
    const validVisaCards = {
      length13: '4916721083493', // 13 digits
      length16: '4532015112830366', // 16 digits
      length19: '4532015112830366000', // 19 digits
    };

    const invalidVisaCards = {
      wrongLength14: '45320151128303', // 14 digits
      wrongLength15: '453201511283036', // 15 digits
      wrongLength17: '45320151128303661', // 17 digits
      wrongLength18: '453201511283036611', // 18 digits
      wrongPrefix: '5532015112830366', // Starts with 5
    };

    test.each(Object.entries(validVisaCards))(
      'should validate correct %s Visa card',
      (_, cardNumber) => {
        expect(checkValidCardType(cardNumber)).toBe(true);
        expect(cardPatterns.visa.test(cardNumber)).toBe(true);
      },
    );

    test.each(Object.entries(invalidVisaCards))(
      'should reject invalid %s Visa card',
      (_, cardNumber) => {
        expect(cardPatterns.visa.test(cardNumber)).toBe(false);
      },
    );
  });
});
