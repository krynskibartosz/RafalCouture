import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  database: 'shopping'
})
export class ShoppingItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'integer' })
  price: number;
}
