import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, Min } from 'class-validator';
export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @IsString()
  @ApiProperty()
  room_name: string;
  @IsNumber()
  @ApiProperty()
  @Min(0)
  living_room: number;
  @IsNumber()
  @ApiProperty()
  @Min(0)
  bedroom: number;
  @IsNumber()
  @ApiProperty()
  @Min(0)
  bed: number;
  @IsNumber()
  @ApiProperty()
  @Min(0)
  bathroom: number;
  @IsString()
  @ApiProperty()
  description: string;
  @IsNumber()
  @ApiProperty()
  @Min(0)
  price: number;
  @IsBoolean()
  @ApiProperty()
  washing_machine: boolean;
  @IsBoolean()
  @ApiProperty()
  iron: boolean;
  @IsBoolean()
  @ApiProperty()
  television: boolean;
  @IsBoolean()
  @ApiProperty()
  air_conditioner: boolean;
  @IsBoolean()
  @ApiProperty()
  wifi: boolean;
  @IsBoolean()
  @ApiProperty()
  parking: boolean;
  @IsBoolean()
  @ApiProperty()
  pool: boolean;
  @IsBoolean()
  @ApiProperty()
  kitchen: boolean;
  @IsString()
  @ApiProperty()
  image: string;
  @IsNumber()
  @ApiProperty()
  location_id: number;
  @IsString()
  @ApiProperty()
  address: string;
}
