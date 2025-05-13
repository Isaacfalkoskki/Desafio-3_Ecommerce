import { DataSource } from 'typeorm';
import { Pets } from '../pets/pet.entity';
import { Form } from '../Form/form.entity';
import { Products } from '../products/products.entity';
import * as fs from 'fs';
import * as path from 'path';

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

async function exportData() {
  await dataSource.initialize();

  const petRepo = dataSource.getRepository(Pets);
  const formRepo = dataSource.getRepository(Form);
  const productRepo = dataSource.getRepository(Products);

  const pets = await petRepo.find();
  const forms = await formRepo.find();
  const products = await productRepo.find();

  const outputDir = path.join(__dirname, 'seeds');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'data-pets.json'), JSON.stringify(pets, null, 2));
  fs.writeFileSync(path.join(outputDir, 'data-forms.json'), JSON.stringify(forms, null, 2));
  fs.writeFileSync(path.join(outputDir, 'data-products.json'), JSON.stringify(products, null, 2));

  console.log('Dados exportados com sucesso!');
  process.exit(0);
}

exportData();
