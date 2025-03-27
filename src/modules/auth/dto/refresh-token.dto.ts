import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RefreshTokenDto {
  @IsNumber()
  @ApiProperty()
  id: number;
  @IsString()
  @ApiProperty()
  refreshToken: string;
}
