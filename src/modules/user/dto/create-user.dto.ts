import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  full_name: string;

  @IsString()
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

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  role_id: number;

  @IsString()
  @ApiProperty()
  @IsOptional()
  avatar: string;
}
