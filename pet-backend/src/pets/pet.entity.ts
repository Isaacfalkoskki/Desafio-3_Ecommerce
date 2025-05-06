import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('Pets')
export class Pets {
  @PrimaryColumn()
  sku: number;

  @Column({ type: 'enum', enum: ['FEMALE', 'MALE'] })
  gender: 'FEMALE' | 'MALE';

  @Column()
  age: number;

  @Column({ type: 'enum', enum: ['SMALL', 'MEDIUM', 'LARGE'] })
  size: 'SMALL' | 'MEDIUM' | 'LARGE';

  @Column()
  vaccinated: boolean;

  @Column()
  dewormed: boolean;

  @Column()
  cert: boolean;

  @Column()
  microchip: boolean;

  @Column()
  location: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'text', nullable: true })
  additional_information: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'enum', enum: ['CAT', 'DOG'] })
  product_type: 'CAT' | 'DOG';

  @Column()
image_url: string;
}