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
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response.success.decorator';
import { Public } from 'src/common/decorators/is-public.decorator';

@Controller('location')
@ApiBearerAuth()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ResponseSuccess('Create Location Successfully')
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }
  @Get('nation-Id/:nation')
  @Public()
  getLocationByNation(@Param('nation') nation: string) {
    return this.locationService.getLocationByNation(+nation);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }

  @Get('not-nation/:nation')
  @Public()
  getFilteredLocations(@Param('nation') nation: string) {
    return this.locationService.getFilteredLocations(+nation);
  }
}
