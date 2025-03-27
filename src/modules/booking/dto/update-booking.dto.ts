import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';
import { IsDate, IsNumber } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @IsNumber()
  @ApiProperty()
  room_id: number;
  @IsNumber()
  @ApiProperty()
  user_id: number;
  @IsNumber()
  @ApiProperty()
  number_guests: number;
  @IsDate()
  @ApiProperty()
  arrival_date: Date;
  @IsDate()
  @ApiProperty()
  departure_date: Date;
}
