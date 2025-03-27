import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLocationDto } from './create-location.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
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
