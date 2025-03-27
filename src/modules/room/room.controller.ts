import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ResponseSuccess } from 'src/common/decorators/response.success.decorator';
import { Public } from 'src/common/decorators/is-public.decorator';

@Controller('room')
@ApiBearerAuth()
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  @ResponseSuccess('Create room successfully')
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  @Public()
  @ResponseSuccess('Get room successfully')
  findAll() {
    return this.roomService.findAll();
  }

  @Get('location-id/:id')
  @ResponseSuccess('Get room successfully')
  @Public()
  findLocation(@Param('id') id: number) {
    return this.roomService.findLocation(+id);
  }

  @Get(':id')
  @ResponseSuccess('Get room successfully')
  @Public()
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Put(':id')
  @ResponseSuccess('Update room successfully')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  @ResponseSuccess('Delete room successfully')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}
