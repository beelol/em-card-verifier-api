import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class VerifyCreditCardDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d+$/, {
    message: 'Credit card number must contain only digits',
  })
  candidate: string;
}
