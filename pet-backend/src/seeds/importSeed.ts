// src/seeds/import-data.seed.ts
import { DataSource } from 'typeorm';
import { Pets } from '../pets/pet.entity';
import { Form } from '../Form/form.entity';
import { Products } from '../products/products.entity';
import * as fs from 'fs';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'petshop',
  entities: [Pets, Form, Products],
  synchronize: false,
});

async function importData() {
  await dataSource.initialize();

  const petRepo = dataSource.getRepository(Pets);
  const formRepo = dataSource.getRepository(Form);
  const productRepo = dataSource.getRepository(Products);

  const pets = JSON.parse(fs.readFileSync('src/seeds/data-pets.json', 'utf-8'));
  const forms = JSON.parse(fs.readFileSync('src/seeds/data-forms.json', 'utf-8'));
  const products = JSON.parse(fs.readFileSync('src/seeds/data-products.json', 'utf-8'));

  await petRepo.save(pets);
  await formRepo.save(forms);
  await productRepo.save(products);

  console.log('Dados importados com sucesso!');
  process.exit(0);
}

importData();
