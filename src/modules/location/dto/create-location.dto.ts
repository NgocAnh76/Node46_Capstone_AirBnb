import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @ApiProperty()
  name_location: string;

  @IsString()
  @ApiProperty()
  province: string;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  nation: number;

  @IsString()
  @ApiProperty()
  image_location: string;
}
