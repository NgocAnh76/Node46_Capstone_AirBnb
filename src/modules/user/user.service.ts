import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { omit } from 'lodash';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { v2 as cloudinary } from 'cloudinary';
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
    return omit(users, [`pass_word`]);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const users = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!users) throw new BadRequestException('Users does not exist');

    const passHash = bcrypt.hashSync(updateUserDto.pass_word, 10);
    const userNew = await this.prisma.users.update({
      where: { user_id: id },
      data: {
        ...updateUserDto,
        pass_word: passHash,
      },
    });
    return userNew;
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
    // Configuration
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

    //  lưu vào db
    await this.prisma.users.update({
      where: {
        user_id: Number(userId),
      },
      data: {
        avatar: uploadResult.secure_url,
      },
    });

    // Để đổi tên được cần đổi cloud_name `https://res.cloudinary.com/<Tên của bạn >/image/upload/`

    return {
      folder: uploadResult?.asset_folder,
      fileName: file.filename,
      imgUrl: uploadResult?.secure_url,
    };
  }
}
