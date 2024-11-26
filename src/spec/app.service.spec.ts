import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import * as verifyCreditCardUtils from '../utils/verifyCreditCard';

jest.mock('../utils/verifyCreditCard');

describe('AppController', () => {
  let appController: AppService;

  const exampleNumber = '0';

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should call verifyCreditCard with "0" and return true', () => {
      const verifyCreditCardSpy = jest
        .spyOn(verifyCreditCardUtils, 'verifyCreditCard')
        .mockReturnValue(true);

      const result = appController.verifyCreditCard(exampleNumber);
      expect(verifyCreditCardSpy).toHaveBeenCalledWith(exampleNumber);
      expect(result).toBe(true);
    });

    it('should call verifyCreditCard with "0" and return false', () => {
      const verifyCreditCardSpy = jest
        .spyOn(verifyCreditCardUtils, 'verifyCreditCard')
        .mockReturnValue(false);

      const result = appController.verifyCreditCard(exampleNumber);
      expect(verifyCreditCardSpy).toHaveBeenCalledWith(exampleNumber);
      expect(result).toBe(false);
    });
  });
});
