import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response.success.decorator';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { FileUploadDto } from './dto/file-upload.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ResponseSuccess('Create User Successfully')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ResponseSuccess('Get User Successfully')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @SkipPermission()
  @ResponseSuccess('Get User Successfully')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @SkipPermission()
  @ResponseSuccess('Update User Successfully')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ResponseSuccess('Delete User Successfully')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'avatar',
    type: FileUploadDto,
  })
  @Post(`avatar-cloud`)
  @SkipPermission()
  @ResponseSuccess('Update Avatar Successfully')
  async avatarCloud(
    @UploadedFile() file,
    @Req()
    req: Request,
  ) {
    return await this.userService.avatarCloud(req, file);
  }
}
