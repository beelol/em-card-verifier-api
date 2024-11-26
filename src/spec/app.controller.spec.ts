import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('verifyCreditCard', () => {
    it('should transform input and delegate to service', () => {
      const serviceSpy = jest
        .spyOn(appService, 'verifyCreditCard')
        .mockReturnValue(true);

      const result = appController.verifyCreditCard({ candidate: '4532' });

      expect(serviceSpy).toHaveBeenCalledWith('4532');
      expect(result).toEqual({ cardIsValid: true });
    });
  });
});
