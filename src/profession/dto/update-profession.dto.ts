import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessionDto } from './create-profession.dto';
import { IsBoolean } from 'class-validator';

export class UpdateProfessionDto extends PartialType(CreateProfessionDto) {
      @ApiProperty({
        example: 'true or false',
      })
      @IsBoolean()
      isActive?: boolean | undefined;
}
