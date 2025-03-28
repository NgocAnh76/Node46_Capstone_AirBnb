import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, Min } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @ApiProperty()
  room_name: string;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  @Min(0)
  living_room: number;

  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Type(() => Number)
  bedroom: number;

  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Type(() => Number)
  bed: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  @Min(0)
  bathroom: number;

  @IsString()
  @ApiProperty()
  description: string;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  @Min(0)
  price: number;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  washing_machine: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  iron: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  television: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  air_conditioner: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  wifi: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  parking: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  pool: boolean;

  @IsBoolean()
  @ApiProperty()
  @Type(() => Boolean)
  kitchen: boolean;
  @IsString()
  @ApiProperty()
  image: string;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  location_id: number;

  @IsString()
  @ApiProperty()
  address: string;
}
