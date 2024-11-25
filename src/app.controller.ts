import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { VerifyCreditCardResponse } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/verify')
  verifyCreditCard(
    @Body('candidate') candidate: string,
  ): VerifyCreditCardResponse {
    if (!candidate) {
      throw new BadRequestException('Credit card number is required');
    }

    const cardIsValid = this.appService.verifyCreditCard(candidate);

    return { cardIsValid };
  }
}
