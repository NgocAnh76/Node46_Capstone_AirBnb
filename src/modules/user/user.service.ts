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
    return listUser.map((user) => omit(user, [`pass_word`]));
  }

  async findOne(id: number) {
    const users = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!users) throw new BadRequestException('Users does not exist');
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const users = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!users) throw new BadRequestException('Users does not exist');

    const data: Prisma.usersUpdateInput = {};
    if (updateUserDto.full_name) {
      data.full_name = updateUserDto.full_name;
    }
    if (updateUserDto.email) {
      data.email = updateUserDto.email;
    }
    if (updateUserDto.pass_word) {
      data.pass_word = bcrypt.hashSync(updateUserDto.pass_word, 10);
    }
    if (updateUserDto.phone) {
      data.phone = updateUserDto.phone;
    }
    if (updateUserDto.birth_day) {
      data.birth_day = updateUserDto.birth_day;
    }
    if (updateUserDto.gender) {
      data.gender = updateUserDto.gender;
    }
    if (
      updateUserDto.role_id !== undefined &&
      [1, 2].includes(updateUserDto.role_id)
    ) {
      data.roles = {
        connect: { role_id: updateUserDto.role_id },
      };
    } else if (updateUserDto.role_id !== undefined) {
      throw new BadRequestException('Role id does not exist,please try again ');
    }
    if (updateUserDto.avatar) {
      data.avatar = updateUserDto.avatar;
    }

    // Clear all properties `undefined`
    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) delete data[key];
    });

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
