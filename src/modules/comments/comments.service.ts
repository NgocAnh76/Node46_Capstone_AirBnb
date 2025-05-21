import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  async create(createCommentDto: CreateCommentDto) {
    const { user_id, room_id, star_comment, content } = createCommentDto;

    // if (!user_id || room_id || star_comment || content)
    //   throw new BadRequestException(`Please provide complete information`);

    const userExist = await this.prisma.users.findUnique({
      where: { user_id },
    });
    if (!userExist) throw new BadRequestException(`Users does not exist`);
    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id },
    });
    if (!roomExist) throw new BadRequestException(`Rooms does not exist`);

    const newComment = await this.prisma.comments.create({
      data: {
        user_id,
        room_id,
        content,
        star_comment,
      },
      include: {
        users: { select: { full_name: true } },
        rooms: { select: { room_name: true } },
      },
    });

    return newComment;
  }

  async findAll() {
    const comment = await this.prisma.comments.findMany();
    return comment;
  }

  async findOne(id: number) {
    const roomExist = await this.prisma.rooms.findUnique({
      where: { room_id: id },
    });
    if (!roomExist) throw new BadRequestException('Rooms does not exist');

    const comment = await this.prisma.comments.findMany({
      where: { room_id: id },
      include: {
        users: { select: { user_id: true, full_name: true, avatar: true } },
      },
    });
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const commentExist = await this.prisma.comments.findUnique({
      where: { comment_id: id },
    });
    if (!commentExist) throw new BadRequestException('Comment does not exist');

    const data: Prisma.commentsUpdateInput = {};
    if (updateCommentDto.room_id)
      data.rooms = { connect: { room_id: updateCommentDto.room_id } };
    if (updateCommentDto.user_id)
      data.users = { connect: { user_id: updateCommentDto.user_id } };
    if (updateCommentDto.content) data.content = updateCommentDto.content;
    if (updateCommentDto.star_comment)
      data.star_comment = updateCommentDto.star_comment;

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) delete data[key];
    });

    const newComment = await this.prisma.comments.update({
      where: { comment_id: id },
      data: data,
    });
    return newComment;
  }

  async remove(id: number) {
    const roomExist = await this.prisma.comments.findUnique({
      where: { comment_id: id },
    });
    if (!roomExist) throw new BadRequestException('Comment does not exist');

    await this.prisma.comments.delete({ where: { comment_id: id } });

    return `This action removes a successfully #${id} comment`;
  }
}
