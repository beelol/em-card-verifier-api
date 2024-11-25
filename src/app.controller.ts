import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/verify')
  verifyCreditCard(candidate: string): boolean {
    return this.appService.verifyCreditCard(candidate);
  }
}
