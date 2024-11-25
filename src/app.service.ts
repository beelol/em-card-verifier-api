import { Injectable } from '@nestjs/common';
import { luhnCheck } from './utils/luhnCheck';

@Injectable()
export class AppService {
  verifyCreditCard(cardNumber: string): boolean {
    return luhnCheck(cardNumber);
  }
}
