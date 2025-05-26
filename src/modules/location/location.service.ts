import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(public prisma: PrismaService) {}
  async create(createLocationDto: CreateLocationDto) {
    const locationExist = await this.prisma.locations.findFirst({
      where: {
        name_location: createLocationDto.name_location,
        province: createLocationDto.province,
      },
    });
    if (locationExist)
      throw new BadRequestException('This location already exists');

    const newLocation = await this.prisma.locations.create({
      data: createLocationDto,
    });
    return newLocation;
  }

  async findAll() {
    return this.prisma.locations.findMany();
  }

  async findOne(id: number) {
    const locations = await this.prisma.locations.findUnique({
      where: {
        location_id: id,
      },
    });
    if (!locations) throw new BadRequestException('Locations does not exist');
    return locations;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const data: Prisma.locationsUpdateInput = {};
    if (updateLocationDto.name_location)
      data.name_location = updateLocationDto.name_location;
    if (updateLocationDto.province) data.province = updateLocationDto.province;
    if (updateLocationDto.nation) data.nation = updateLocationDto.nation;
    if (updateLocationDto.image_location)
      data.image_location = updateLocationDto.image_location;

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) delete data[key];
    });

    const locationExist = await this.prisma.locations.findUnique({
      where: {
        location_id: id,
      },
    });
    if (!locationExist)
      throw new BadRequestException('Locations does not exist');
    return await this.prisma.locations.update({
      where: { location_id: id },
      data: data,
    });
  }

  async remove(id: number) {
    const locationExist = await this.prisma.locations.findUnique({
      where: {
        location_id: id,
      },
    });
    if (!locationExist)
      throw new BadRequestException('Locations does not exist');

    await this.prisma.locations.delete({
      where: { location_id: id },
    });
    return `Delete successfully`;
  }

  async getLocationByNation(nation: number) {
    const locations = await this.prisma.locations.findMany({
      where: {
        nation: nation,
      },
    });
    if (!locations) throw new BadRequestException('Locations does not exist ');
    return locations;
  }
  async getFilteredLocations(nation: number) {
    const locations = await this.prisma.locations.findMany({
      where: {
        nation: { not: nation },
      },
    });
    if (!locations)
      throw new BadRequestException('Locations does not exist aa');
    return locations;
  }
}
