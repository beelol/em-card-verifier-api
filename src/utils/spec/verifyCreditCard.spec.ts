import { verifyCreditCard } from '../verifyCreditCard';

describe('Verify Credit Card - Almost-valid cases', () => {
  const almostValidCards = {
    // Numbers that are close to valid patterns

    almost_visa: '4123456789012344', // Valid prefix, valid length, off by one digit

    almost_mastercard: '5112345678901233', // Valid prefix, valid length, off by one digit

    almost_amex: '341234567890123', // Valid prefix, valid length, off by one digit

    almost_discover: '601112345678901', // Valid prefix, wrong length by one digit

    // Valid prefixes mismatched with valid lengths from other card types
    visa_prefix_amex_length: '412345678901234', // Visa prefix (4) with Amex length (15)
    amex_prefix_visa_length: '341234567890123', // Amex prefix (34) with Visa length (13)
    mc_prefix_amex_length: '511234567890123', // MC prefix (51) with Amex length (15)
    discover_prefix_amex_length: '601112345678901', // Discover prefix (6011) with Amex length (15)

    // Valid prefixes with valid lengths, but invalid last digit to fail LuhnCheck
    mastercardValidPatternWrongLuhn: '5105105105105101',
    amexValidPatternWrongLuhn: '348282246310006',
    discoverValidPatternWrongLuhn: '6011111111111118',
    visaValidPatternWrongLuhn: '4532015112830367',
  };

  test.each(Object.entries(almostValidCards))(
    'should reject %s',
    (_, cardNumber) => {
      expect(verifyCreditCard(cardNumber)).toBe(false);
    },
  );
});
