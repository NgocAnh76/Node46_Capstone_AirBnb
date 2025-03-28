import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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
  content: string | undefined;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  star_comment: number | undefined;
}
