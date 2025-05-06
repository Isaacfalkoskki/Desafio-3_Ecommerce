import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Column } from "typeorm";


export class CreatePetDto {
    @IsNumber()
    sku: number;
  
    @IsEnum(['FEMALE', 'MALE'])
    gender: 'FEMALE' | 'MALE';
  
    @IsNumber()
    age: number;
  
    @IsEnum(['SMALL', 'MEDIUM', 'LARGE'])
    size: 'SMALL' | 'MEDIUM' | 'LARGE';
  
    @IsBoolean()
    vaccinated: boolean;
  
    @IsBoolean()
    dewormed: boolean;
  
    @IsBoolean()
    cert: boolean;
  
    @IsBoolean()
    microchip: boolean;
  
    @IsString()
    location: string;
  
    @IsOptional()
    @IsString()
    additional_information?: string;
  
    @IsString()
    name: string;
  
    @IsNumber()
    price: number;
  
    @IsEnum(['CAT', 'DOG'])
    product_type: 'CAT' | 'DOG';
  
    // Você pode remover esses se forem gerados automaticamente no backend
    @IsOptional()
    @IsDateString()
    created_at?: Date;
  
    @IsOptional()
    @IsDateString()
    updated_at?: Date;

    @IsString()
image_url: string;
  }

  