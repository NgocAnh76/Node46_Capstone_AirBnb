import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';

@Controller('booking')
@ApiBearerAuth()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @SkipPermission()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  @SkipPermission()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  @SkipPermission()
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }
  @Get('room/:id')
  @SkipPermission()
  findByRoom(@Param('id') id: string) {
    return this.bookingService.findByRoom(+id);
  }

  @Get('user/:id')
  @SkipPermission()
  findByName(@Param('id') id: string) {
    return this.bookingService.findByName(+id);
  }
  @Put(':id')
  @SkipPermission()
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
