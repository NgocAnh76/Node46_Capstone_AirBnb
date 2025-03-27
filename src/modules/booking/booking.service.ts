import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(public prisma: PrismaService) {}
  async create(createBookingDto: CreateBookingDto) {
    const userExist = await this.prisma.users.findUnique({
      where: { user_id: createBookingDto.user_id },
    });
    if (!userExist) throw new BadRequestException('Users does not exist');

    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id: createBookingDto.room_id },
    });
    if (!roomExist) throw new BadRequestException('Rooms does not exist');

    const bookingExist = await this.prisma.bookings.findFirst({
      where: createBookingDto,
    });
    if (bookingExist) throw new BadRequestException('You have booked a room');
    return await this.prisma.bookings.create({
      data: createBookingDto,
    });
  }

  async findAll() {
    return await this.prisma.bookings.findMany();
  }
  async findOne(id: number) {
    const bookingExist = await this.prisma.bookings.findUnique({
      where: { booking_id: id },
    });
    if (!bookingExist)
      throw new BadRequestException('Bookings does  not exist');
    return bookingExist;
  }

  async findByRoom(id: number) {
    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id: id },
    });
    if (!roomExist) throw new BadRequestException('Rooms does not exits');
    const bookings = await this.prisma.bookings.findMany({
      where: { room_id: id },
    });
    if (bookings.length === 0)
      throw new BadRequestException('Current rooms available not booked');
    return bookings;
  }

  async findByName(id: number) {
    const userExist = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!userExist) throw new BadRequestException('Users does not exits');
    const bookings = await this.prisma.bookings.findMany({
      where: { user_id: id },
    });
    if (bookings.length === 0)
      throw new BadRequestException('This user has not been booked yet.');
    return bookings;
  }
  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const bookingExist = await this.prisma.bookings.findUnique({
      where: { booking_id: id },
    });
    if (!bookingExist)
      throw new BadRequestException('Bookings does  not exist');

    return await this.prisma.bookings.update({
      where: { booking_id: id },
      data: updateBookingDto,
    });
  }

  async remove(id: number) {
    const bookingExist = await this.prisma.bookings.findFirst({
      where: { booking_id: id },
    });
    if (!bookingExist)
      throw new BadRequestException('Bookings does  not exist');
    await this.prisma.bookings.delete({
      where: { booking_id: id },
    });
    return `Delete successfully BookingID:${id}`;
  }
}
