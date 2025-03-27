import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(public prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    const locationExist = await this.prisma.locations.findUnique({
      where: { location_id: createRoomDto.location_id },
    });
    if (!locationExist)
      throw new BadRequestException(
        'Location does not exist,Please enter on another location',
      );
    const newRoom = await this.prisma.rooms.create({
      data: createRoomDto,
    });
    return newRoom;
  }

  async findAll() {
    const listRoom = await this.prisma.rooms.findMany();
    return listRoom;
  }

  async findLocation(id: number) {
    const locationExist = await this.prisma.locations.findFirst({
      where: {
        location_id: id,
      },
    });
    if (!locationExist)
      throw new BadRequestException(
        'The above location has not been updated on the system.',
      );

    const rooms = await this.prisma.rooms.findMany({
      where: {
        location_id: id,
      },
      include: {
        locations: true,
      },
    });
    if (!rooms)
      throw new BadRequestException(
        'There are no rooms available at this location.',
      );
    return rooms;
  }

  async findOne(id: number) {
    const rooms = await this.prisma.rooms.findUnique({
      where: { room_id: id },
      include: {
        locations: true,
      },
    });
    if (!rooms) throw new BadRequestException('Rooms does not exits.');
    return rooms;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id: id },
    });
    if (roomExist) {
      const newRoom = await this.prisma.rooms.update({
        where: { room_id: id },
        data: updateRoomDto,
      });
      return newRoom;
    }
  }

  async remove(id: number) {
    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id: id },
    });
    if (!roomExist) throw new BadRequestException('Rooms does not exist');

    await this.prisma.rooms.delete({
      where: { room_id: id },
    });
    return `Delete room ID:${id} successfully`;
  }
}
