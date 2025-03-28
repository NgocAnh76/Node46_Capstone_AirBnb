import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

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
    const data: Prisma.roomsUpdateInput = {};
    if (updateRoomDto.room_name) data.room_name = updateRoomDto.room_name;
    if (updateRoomDto.living_room) data.living_room = updateRoomDto.living_room;
    if (updateRoomDto.bedroom) data.bedroom = updateRoomDto.bedroom;
    if (updateRoomDto.bed) data.bed = updateRoomDto.bed;
    if (updateRoomDto.bathroom) data.bathroom = updateRoomDto.bathroom;
    if (updateRoomDto.price) data.price = updateRoomDto.price;
    if (updateRoomDto.description) data.description = updateRoomDto.description;
    if (updateRoomDto.washing_machine)
      data.washing_machine = updateRoomDto.washing_machine;
    if (updateRoomDto.iron) data.iron = updateRoomDto.iron;
    if (updateRoomDto.television) data.television = updateRoomDto.television;
    if (updateRoomDto.air_conditioner)
      data.air_conditioner = updateRoomDto.air_conditioner;
    if (updateRoomDto.wifi) data.wifi = updateRoomDto.wifi;
    if (updateRoomDto.parking) data.parking = updateRoomDto.parking;
    if (updateRoomDto.pool) data.pool = updateRoomDto.pool;
    if (updateRoomDto.kitchen) data.kitchen = updateRoomDto.kitchen;
    if (updateRoomDto.image) data.image = updateRoomDto.image;
    if (updateRoomDto.location_id)
      data.locations = {
        connect: { location_id: updateRoomDto.location_id },
      };
    if (updateRoomDto.address) data.address = updateRoomDto.address;

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) delete data[key];
    });

    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id: id },
    });
    if (roomExist) {
      const newRoom = await this.prisma.rooms.update({
        where: { room_id: id },
        data: data,
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
