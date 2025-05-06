// import { Controller, Get } from '@nestjs/common';
// import { PetsService } from './pets.service';

import { Body, Controller, Get, Post } from "@nestjs/common";
import { Pets } from "./pet.entity";
import { CreatePetDto } from "./dto/CreatePetDTO"
import { PetService } from "./pets.service"

// @Controller('pets')
// export class PetsController {
//   constructor(private petsService: PetsService) {}

//   @Get()
//   findAll() {
//     return this.petsService.findAll();
//   }
// }


@Controller("pets")
export class PetsController {
  constructor(private readonly PetService: PetService) {}
  
    @Post()
  async create(@Body() createPetDTO: CreatePetDto): Promise<Pets> {
    return this.PetService.create(createPetDTO)
  }

  @Get()
  async findAll(): Promise<Pets[] | null> {
    return this.PetService.findAll()
  }
}