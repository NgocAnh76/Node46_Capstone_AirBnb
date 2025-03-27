import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @ApiProperty()
  full_name: string;
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @ApiProperty()
  pass_word: string;
  @IsString()
  @ApiProperty()
  phone: string;
  @IsString()
  @ApiProperty()
  birth_day: string;
  @IsString()
  @ApiProperty()
  gender: string;
}
