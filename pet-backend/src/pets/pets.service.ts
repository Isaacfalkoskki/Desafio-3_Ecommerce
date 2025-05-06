/*

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
}*/

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pets } from "./pet.entity";
import { CreatePetDto } from "./dto/CreatePetDTO";


export class PetService {
  constructor(
    @InjectRepository(Pets)
    private readonly petRepository: Repository<Pets>
  ) {}

  async create(cretePetDTO: CreatePetDto): Promise<Pets>{
    return this.petRepository.save(cretePetDTO)
  }

  async findAll(): Promise<Pets[] | null> {
    return await this.petRepository.find()
  }
}