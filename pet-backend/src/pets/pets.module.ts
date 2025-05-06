// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { PetsController } from './pets.controller';
// import { PetsService } from './pets.service';
// import { Pet } from './pet.entity';

import { Module } from "@nestjs/common";
import { PetService } from "./pets.service";
import { PetsController } from "./pets.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pets } from "./pet.entity";

// @Module({
//   imports: [TypeOrmModule.forFeature([Pet])],
//   controllers: [PetsController],
//   providers: [PetsService],
// })
// export class PetsModule {}

@Module({
  imports: [TypeOrmModule.forFeature([Pets])],
  controllers: [PetsController],
  providers: [PetService],
  exports: [PetService]
})

export class PetsModule {}