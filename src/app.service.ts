import { Injectable } from '@nestjs/common';
import { verifyCreditCard } from './utils/verifyCreditCard';

@Injectable()
export class AppService {
  verifyCreditCard(cardNumber: string): boolean {
    return verifyCreditCard(cardNumber);
  }
}
