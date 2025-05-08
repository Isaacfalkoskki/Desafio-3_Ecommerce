import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { Pets } from "./pet.entity";
import { CreatePetDto } from "./dto/CreatePetDTO";
import { PetService } from "./pets.service";
import { FilterPetsDto } from './dto/FilterPetDTO';

@Controller("pets")
export class PetsController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async create(@Body() createPetDTO: CreatePetDto): Promise<Pets> {
    return this.petService.create(createPetDTO);
  }

  @Get()
  async getFilteredPets(@Query() filterPetsDto: FilterPetsDto): Promise<Pets[]> {
    return this.petService.getPets(filterPetsDto);
  }

  @Get(':sku')
  async getPetBySku(@Param('sku') sku: string): Promise<Pets> {
    return this.petService.getPetBySku(Number(sku));
  }
}
