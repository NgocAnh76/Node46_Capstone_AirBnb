import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
  role_id: number;
  @IsString()
  @ApiProperty()
  @IsOptional()
  avatar: string;
}
