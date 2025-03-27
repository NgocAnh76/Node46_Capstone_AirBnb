import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  @ApiProperty()
  room_id: number;
  @IsNumber()
  @ApiProperty()
  user_id: number;
  @IsString()
  @ApiProperty()
  content: string;
  @IsNumber()
  @ApiProperty()
  star_comment: number;
}
