import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from '../prisma/prisma.service';

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
    if (locationExist) throw new BadRequestException('Locations does not exit');

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
    const locationExist = await this.prisma.locations.findUnique({
      where: {
        location_id: id,
      },
    });
    if (!locationExist)
      throw new BadRequestException('Locations does not exist');
    return await this.prisma.locations.update({
      where: { location_id: id },
      data: updateLocationDto,
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
