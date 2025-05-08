import { Body, Controller, Get, Post } from "@nestjs/common";
import { Products } from "./products.entity";
import { CreateProductDto } from "./dto/CreateProductsDTO";
import { ProductService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Products> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Products[] | null> {
    return this.productService.findAll();
  }
}