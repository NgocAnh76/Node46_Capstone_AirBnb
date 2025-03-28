import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLocationDto } from './create-location.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {}
