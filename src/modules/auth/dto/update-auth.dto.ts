import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsString()
  @ApiProperty()
  email: string;
  @IsString()
  @ApiProperty()
  pass_word?: string | undefined;
}
