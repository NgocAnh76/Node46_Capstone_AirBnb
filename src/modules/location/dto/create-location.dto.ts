import { ApiProperty } from '@nestjs/swagger';
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
  nation: number;
  @IsString()
  @ApiProperty()
  image_location: string;
}
