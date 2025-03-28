import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';
import { IsDate, IsNumber } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {}
