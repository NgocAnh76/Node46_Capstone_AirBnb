import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class CreateBookingDto {
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
  @Type(() => Date)
  arrival_date: Date;
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  departure_date: Date;
}
