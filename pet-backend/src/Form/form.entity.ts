import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCompleto: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
