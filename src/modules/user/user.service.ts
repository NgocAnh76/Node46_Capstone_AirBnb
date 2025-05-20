import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { omit } from 'lodash';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { v2 as cloudinary } from 'cloudinary';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(public prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: createUserDto.email,
      },
    });
    if (userExist)
      throw new BadRequestException('Account already exists please login');

    const passHash = await bcrypt.hash(createUserDto.pass_word, 10);

    const userNew = await this.prisma.users.create({
      data: {
        ...createUserDto,
        pass_word: passHash,
      },
    });

    return omit(userNew, ['pass_word']);
  }

  async findAll() {
    const listUser = await this.prisma.users.findMany();
    return listUser;
  }

  async findOne(id: number) {
    const users = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!users) throw new BadRequestException('Users does not exist');
    return omit(users, [`pass_word`]);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (!updateUserDto) {
      throw new BadRequestException('Update data is required');
    }

    const users = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!users) throw new BadRequestException('Users does not exist');

    const data: Prisma.usersUpdateInput = {};

    // Only update fields that are explicitly provided and not null
    Object.keys(updateUserDto).forEach((key) => {
      const value = updateUserDto[key];
      if (value !== undefined && value !== null) {
        if (key === 'pass_word') {
          data[key] = bcrypt.hashSync(value, 10);
        } else if (key === 'role_id') {
          if ([1, 2].includes(value)) {
            data.roles = {
              connect: { role_id: value },
            };
          } else {
            throw new BadRequestException(
              'Role id does not exist, please try again',
            );
          }
        } else {
          data[key] = value;
        }
      }
    });

    // If no fields to update, return current user data
    if (Object.keys(data).length === 0) {
      return omit(users, ['pass_word']);
    }

    const userNew = await this.prisma.users.update({
      where: { user_id: id },
      data: data,
    });
    return omit(userNew, [`pass_word`]);
  }

  async remove(id: number) {
    const users = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!users) throw new BadRequestException('Users does not exist');
    await this.prisma.users.delete({
      where: { user_id: id },
    });
    return `Delete successfully user ID:${id} `;
  }

  async avatarCloud(payload: any, file: any) {
    if (!file) {
      throw new BadRequestException(`Please provide image`);
    }

    const userId = payload.user.user_id;

    cloudinary.config({
      cloud_name: 'nguyenngocanh',
      api_key: '782482279377515',
      api_secret: 'P6b4oyAII-DoQFCsWNPoIKyIOBs',
    });

    const uploadResult: any = await new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream({ folder: 'images' }, (error, uploadResult) => {
          return resolve(uploadResult);
        })
        .end(file.buffer);
    });
    console.log({ uploadResult });

    await this.prisma.users.update({
      where: {
        user_id: Number(userId),
      },
      data: {
        avatar: uploadResult.secure_url,
      },
    });

    return {
      folder: uploadResult?.asset_folder,
      fileName: file.filename,
      imgUrl: uploadResult?.secure_url,
    };
  }
}
