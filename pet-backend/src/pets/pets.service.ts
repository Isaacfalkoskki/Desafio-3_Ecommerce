import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pets } from './pet.entity';
import { FilterPetsDto } from './dto/FilterPetDTO';
import { CreatePetDto } from './dto/CreatePetDTO';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pets)
    private readonly petRepository: Repository<Pets>,
  ) {}

  async create(createPetDTO: CreatePetDto): Promise<Pets> {
    const pet = this.petRepository.create(createPetDTO);
    return this.petRepository.save(pet);
  }

  async getPets(filterPetsDto: FilterPetsDto): Promise<Pets[]> {
    const { gender, size, vaccinated, maxPrice } = filterPetsDto;
    const queryBuilder = this.petRepository.createQueryBuilder('pet');

    if (gender) {
      queryBuilder.andWhere('pet.gender = :gender', { gender });
    }

    if (size) {
      queryBuilder.andWhere('pet.size = :size', { size });
    }

    if (vaccinated !== undefined) {
      queryBuilder.andWhere('pet.vaccinated = :vaccinated', { vaccinated: vaccinated === true });
    }

    if (maxPrice) {
      queryBuilder.andWhere('pet.price <= :maxPrice', { maxPrice: parseFloat(maxPrice) });
    }

    return await queryBuilder.getMany();
  }

  async getPetBySku(sku: number): Promise<Pets> {
    const pet = await this.petRepository.findOne({ where: { sku } });

    if (!pet) {
      throw new Error(`Pet with SKU ${sku} not found`);
    }

    return pet;
  }
}
