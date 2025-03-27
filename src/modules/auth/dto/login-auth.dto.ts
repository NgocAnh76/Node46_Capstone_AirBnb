import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginAuthDto {
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @ApiProperty()
  pass_word: string;
}
