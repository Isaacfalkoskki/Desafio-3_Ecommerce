import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { Pets } from './pets/pet.entity';
import { PetsModule } from './pets/pets.module';
import { ProductsModule } from './products/products.module';
import { Products } from './products/products.entity';
import { FormModule } from './Form/form.module';
import { Form } from './Form/form.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'petshop',
      entities: [Pets, Products, Form],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Pets, Products, Form]),
    PetsModule,
    ProductsModule,
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
