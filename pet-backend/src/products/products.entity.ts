import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Products')
export class Products {
  @PrimaryColumn()
  sku: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ['CAT', 'DOG', 'TOY', 'COSTUME'] })
  product_type: 'CAT' | 'DOG' | 'TOY' | 'COSTUME';

  @Column({ nullable: true })
  size: string;

  @Column('int')
  price: number;

  @Column()
  image_url: string;
}