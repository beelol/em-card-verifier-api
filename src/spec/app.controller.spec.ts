import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import * as luhnUtils from '../utils/luhnCheck';

jest.mock('../utils/luhnCheck');

describe('AppController', () => {
  let appController: AppController;

  const exampleNumber = { candidate: '0' };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should call luhnCheck with controller input and return luhnCheck result when true', () => {
      const luhnCheckSpy = jest
        .spyOn(luhnUtils, 'luhnCheck')
        .mockReturnValue(true);

      const result = appController.verifyCreditCard(exampleNumber);
      expect(luhnCheckSpy).toHaveBeenCalledWith(exampleNumber.candidate);
      expect(result).toEqual({ cardIsValid: true });
    });

    it('should call luhnCheck with controller input and return luhnCheck result when false }', () => {
      const luhnCheckSpy = jest
        .spyOn(luhnUtils, 'luhnCheck')
        .mockReturnValue(false);

      const result = appController.verifyCreditCard(exampleNumber);
      expect(luhnCheckSpy).toHaveBeenCalledWith(exampleNumber.candidate);
      expect(result).toEqual({ cardIsValid: false });
    });
  });
});
