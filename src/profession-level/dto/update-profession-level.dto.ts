import { PartialType } from '@nestjs/swagger';
import { CreateProfessionLevelDto } from './create-profession-level.dto';

export class UpdateProfessionLevelDto extends PartialType(CreateProfessionLevelDto) {}
