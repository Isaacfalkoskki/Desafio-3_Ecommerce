import { IsEnum, IsNumber, IsOptional, IsString, IsDateString } from "class-validator";

export class CreateProductDto {
  @IsString()
  sku: string;

  @IsString()
  name: string;

  @IsEnum(['CAT', 'DOG', 'TOY', 'COSTUME'])
  product_type: 'CAT' | 'DOG' | 'TOY' | 'COSTUME';

  @IsOptional()
  @IsString()
  size?: string;

  @IsNumber()
  price: number;

  @IsString()
  image_url: string;
}