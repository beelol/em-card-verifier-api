import { checkValidCardType } from './checkValidCardType';
import { luhnCheck } from './luhnCheck';

// Should verify that it's a valid card by length and prefix, then ONLY check the Luhn algorithm if it is.
export const verifyCreditCard = (candidate: string): boolean =>
  checkValidCardType(candidate) && luhnCheck(candidate);
