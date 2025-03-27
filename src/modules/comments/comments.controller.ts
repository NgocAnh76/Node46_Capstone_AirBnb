import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { TokenCheck } from '../auth/token/token-check';
import { Public } from 'src/common/decorators/is-public.decorator';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response.success.decorator';

@Controller('comments')
@ApiBearerAuth()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ResponseSuccess('Create comment successfully')
  @SkipPermission()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @ResponseSuccess('Get comment successfully')
  @Public()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ResponseSuccess('Get comment successfully')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Put(':id')
  @ResponseSuccess('Update comment successfully')
  @SkipPermission()
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @ResponseSuccess('Delete comment successfully')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
