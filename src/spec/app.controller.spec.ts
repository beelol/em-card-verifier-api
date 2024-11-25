import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import * as luhnUtils from '../utils/luhnCheck';

jest.mock('../utils/luhnCheck');

describe('AppController', () => {
  let appController: AppController;

  const exampleNumber = '0';

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should call luhnCheck with "0" and return { cardIsValid: true }', () => {
      const luhnCheckSpy = jest
        .spyOn(luhnUtils, 'luhnCheck')
        .mockReturnValue(true);

      const result = appController.verifyCreditCard(exampleNumber);
      expect(luhnCheckSpy).toHaveBeenCalledWith(exampleNumber);
      expect(result).toEqual({ cardIsValid: true });
    });

    it('should call luhnCheck with "0" and return { cardIsValid: false }', () => {
      const luhnCheckSpy = jest
        .spyOn(luhnUtils, 'luhnCheck')
        .mockReturnValue(false);

      const result = appController.verifyCreditCard(exampleNumber);
      expect(luhnCheckSpy).toHaveBeenCalledWith(exampleNumber);
      expect(result).toEqual({ cardIsValid: false });
    });
  });
});
