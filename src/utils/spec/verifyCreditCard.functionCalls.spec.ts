import { verifyCreditCard } from '../verifyCreditCard';
import * as luhnUtils from '../luhnCheck';
import * as cardTypeUtils from '../checkValidCardType';

jest.mock('../checkValidCardType', () => ({
  checkValidCardType: jest.fn(),
}));

jest.mock('../luhnCheck', () => ({
  luhnCheck: jest.fn(),
}));

describe('Verify Credit Card - Calls correct functions', () => {
  const { checkValidCardType } = cardTypeUtils;
  const { luhnCheck } = luhnUtils;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call checkValidCardType and luhnCheck when card type is valid', () => {
    (checkValidCardType as jest.Mock).mockReturnValue(true);
    (luhnCheck as jest.Mock).mockReturnValue(true);

    const cardNumber = '4111111111111111';
    const result = verifyCreditCard(cardNumber);

    expect(checkValidCardType).toHaveBeenCalledWith(cardNumber);
    expect(luhnCheck).toHaveBeenCalledWith(cardNumber);
    expect(result).toBe(true);
  });

  it('should call checkValidCardType and not call luhnCheck when card type is invalid', () => {
    (checkValidCardType as jest.Mock).mockReturnValue(false);

    const cardNumber = '1234567890123456';
    const result = verifyCreditCard(cardNumber);

    expect(checkValidCardType).toHaveBeenCalledWith(cardNumber);
    expect(luhnCheck).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });

  it('should return false if luhnCheck returns false', () => {
    (checkValidCardType as jest.Mock).mockReturnValue(true);
    (luhnCheck as jest.Mock).mockReturnValue(false);

    const cardNumber = '1234567890123456';
    const result = verifyCreditCard(cardNumber);

    expect(checkValidCardType).toHaveBeenCalledWith(cardNumber);
    expect(luhnCheck).toHaveBeenCalledWith(cardNumber);
    expect(result).toBe(false);
  });
});
