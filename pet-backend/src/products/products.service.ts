import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Products } from "./products.entity";
import { CreateProductDto } from "./dto/CreateProductsDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Products> {
    return this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<Products[] | null> {
    return await this.productRepository.find();
  }
}