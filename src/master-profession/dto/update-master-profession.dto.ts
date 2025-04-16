import { PartialType } from '@nestjs/swagger';
import { CreateMasterProfessionDto } from './create-master-profession.dto';

export class UpdateMasterProfessionDto extends PartialType(CreateMasterProfessionDto) {}
