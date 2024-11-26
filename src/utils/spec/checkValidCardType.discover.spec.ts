import { checkValidCardType, cardPatterns } from '../checkValidCardType';

describe('Credit Card Type Validation', () => {
  describe('Discover Validation', () => {
    const validDiscoverCards = {
      prefix6011: '6011111111111117', // Starts with 6011
      prefix644: '6441111111111117', // Starts with 644
      prefix645: '6451111111111117', // Starts with 645
      prefix646: '6461111111111117', // Starts with 646
      prefix647: '6471111111111117', // Starts with 647
      prefix648: '6481111111111117', // Starts with 648
      prefix649: '6491111111111117', // Starts with 649
      prefix65: '6511111111111117', // Starts with 65
      prefix622126: '6221261111111117', // Starts with 622126
      prefix622925: '6229251111111117', // Starts with 622925
    };

    const invalidDiscoverCards = {
      wrongLength15: '601111111111111', // 15 digits
      wrongLength20: '60111111111111111111', // 20 digits
      wrongPrefix6010: '6010111111111117', // Starts with 6010
      wrongPrefix643: '6431111111111117', // Starts with 643
      wrongPrefix622125: '6221251111111117', // Starts with 622125
      wrongPrefix622926: '6229261111111117', // Starts with 622926
    };

    test.each(Object.entries(validDiscoverCards))(
      'should validate correct %s Discover card',
      (_, cardNumber) => {
        expect(checkValidCardType(cardNumber)).toBe(true);
        expect(cardPatterns.discover.test(cardNumber)).toBe(true);
      },
    );

    test.each(Object.entries(invalidDiscoverCards))(
      'should reject invalid %s Discover card',
      (_, cardNumber) => {
        expect(cardPatterns.discover.test(cardNumber)).toBe(false);
      },
    );
  });
});
