import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { MasterQueryDto } from './dto/master-query.dto';
import { Role } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { AuthGuard } from 'src/auth-guard/auth.guard';

@ApiTags('Master')
@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('/create')
  @ApiOperation({ summary: 'Yangi master yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Master muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 400,
    description: 'Noto‘g‘ri maʼlumot kiritilgan',
  })
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.createMaster(createMasterDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Barcha masterlarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Masterlar ro‘yxati',
  })
  findAll(@Query() query: MasterQueryDto) {
    return this.masterService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta masterni ID bo‘yicha olish' })
  @ApiParam({ name: 'id', description: 'Master IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Topilgan master',
  })
  @ApiResponse({
    status: 404,
    description: 'Master topilmadi',
  })
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(id);
  }

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Patch('/update/:id')
  @ApiOperation({ summary: 'Masterni yangilash' })
  @ApiParam({ name: 'id', description: 'Yangilash uchun master IDsi' })
  @ApiBody({ type: UpdateMasterDto }) // request body tipi
  @ApiResponse({
    status: 200,
    description: 'Master yangilandi',
  })
  @ApiResponse({
    status: 404,
    description: 'Master topilmadi',
  })
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(id, updateMasterDto);
  }

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Masterni o‘chirish' })
  @ApiParam({ name: 'id', description: 'O‘chirish uchun master IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Master o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Master topilmadi',
  })
  remove(@Param('id') id: string) {
    return this.masterService.remove(id);
  }
}
