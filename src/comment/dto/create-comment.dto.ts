import {
    IsString,
    IsNotEmpty,
    IsUUID,
    IsArray,
    ValidateNested,
    IsNumber,
    Min,
    Max,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
  
  class MasterRatingDto {
    @ApiProperty({ example: 'MasterID' })
    @IsUUID()
    masterId: string;
  
    @ApiProperty({ example: 4.5 })
    @IsNumber()
    @Min(0)
    @Max(5)
    star: number;
  }
  
  export class CreateCommentDto {
    @ApiProperty({ example: 'Great service!' })
    @IsString()
    @IsNotEmpty()
    message: string;
  
    @ApiProperty({ example: 'OrderID' })
    @IsUUID()
    orderId: string;
  
    @ApiProperty({
      type: [MasterRatingDto],
      example: [
        {
          masterId: 'MasterID',
          star: 4.5,
        },
      ],
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MasterRatingDto)
    masterRatings: MasterRatingDto[];
  
    @ApiHideProperty()
    userId: string; // Swagger'da ko'rinmaydi, ammo controller/service'da foydalanamiz
  }
  