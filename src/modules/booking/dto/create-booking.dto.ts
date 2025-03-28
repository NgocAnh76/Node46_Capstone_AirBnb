import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  room_id: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  user_id: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
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
