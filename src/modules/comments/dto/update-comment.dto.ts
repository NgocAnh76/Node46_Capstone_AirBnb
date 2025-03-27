import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsNumber()
  @ApiProperty()
  user_id: number;
  @IsNumber()
  @ApiProperty()
  room_id: number;
  @IsNumber()
  @ApiProperty()
  star_comment?: number | undefined;
  @IsString()
  @ApiProperty()
  content?: string | undefined;
}
