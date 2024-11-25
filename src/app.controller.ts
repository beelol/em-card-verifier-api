import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { VerifyCreditCardResponse } from './types';
import { VerifyCreditCardDto } from './validation/creditcard.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/verify')
  verifyCreditCard(@Body() dto: VerifyCreditCardDto): VerifyCreditCardResponse {
    const cardIsValid = this.appService.verifyCreditCard(dto.candidate);

    return { cardIsValid };
  }
}
