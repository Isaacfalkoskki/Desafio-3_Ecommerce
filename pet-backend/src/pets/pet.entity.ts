import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  age: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;
}