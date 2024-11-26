import { checkValidCardType } from '../checkValidCardType';

describe('Credit Card Type Validation', () => {
  describe('Valid Lengths with Wrong Prefixes', () => {
    const validLengthWrongPrefix = {
      // 13 digits (valid Visa length)
      length13_prefix1: '1234567890123',
      length13_prefix2: '2234567890123',
      length13_prefix7: '7234567890123',

      // 16 digits (valid Visa/MC/Discover length)
      length16_prefix1: '1234567890123456',
      length16_prefix7: '7234567890123456',
      length16_prefix8: '8234567890123456',
      length16_prefix9: '9234567890123456',

      // 15 digits (valid Amex length)
      length15_prefix1: '123456789012345',
      length15_prefix2: '223456789012345',
      length15_prefix4: '423456789012345',
      length15_prefix8: '823456789012345',

      // 19 digits (valid Visa/Discover length)
      length19_prefix1: '1234567890123456789',
      length19_prefix7: '7234567890123456789',
      length19_prefix8: '8234567890123456789',
    };

    test.each(Object.entries(validLengthWrongPrefix))(
      'should reject %s despite valid length',
      (_, cardNumber) => {
        expect(checkValidCardType(cardNumber)).toBe(false);
      },
    );
  });

  describe('Valid Prefixes with Wrong Lengths', () => {
    const validPrefixWrongLength = {
      // Visa prefix (4) with invalid lengths
      visa_length12: '412345678901', // 12 digits
      visa_length14: '41234567890123', // 14 digits
      visa_length15: '412345678901234', // 15 digits
      visa_length17: '41234567890123456', // 17 digits
      visa_length18: '412345678901234567', // 18 digits
      visa_length20: '41234567890123456789', // 20 digits

      // Mastercard prefixes with invalid lengths
      mc_51_length15: '512345678901234', // 15 digits
      mc_51_length17: '51234567890123456', // 17 digits
      mc_2221_length15: '222123456789012', // 15 digits
      mc_2221_length17: '222123456789012345', // 17 digits

      // Amex prefixes with invalid lengths
      amex_34_length14: '34123456789012', // 14 digits
      amex_34_length16: '3412345678901234', // 16 digits
      amex_37_length14: '37123456789012', // 14 digits
      amex_37_length16: '3712345678901234', // 16 digits

      // Discover prefixes with invalid lengths
      discover_6011_length15: '601123456789012', // 15 digits
      discover_6011_length20: '60112345678901234567', // 20 digits
      discover_644_length15: '644123456789012', // 15 digits
      discover_65_length15: '651123456789012', // 15 digits
    };

    test.each(Object.entries(validPrefixWrongLength))(
      'should reject %s despite valid prefix',
      (_, cardNumber) => {
        expect(checkValidCardType(cardNumber)).toBe(false);
      },
    );
  });
});
