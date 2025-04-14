import { PartialType } from '@nestjs/swagger';
import { CreateRegionDto } from './create-region.dto';

/**
 * Regionni yangilash uchun DTO
 * Swagger hujjatlari uchun moslashtirilgan
 */
export class UpdateRegionDto extends PartialType(CreateRegionDto) {}
