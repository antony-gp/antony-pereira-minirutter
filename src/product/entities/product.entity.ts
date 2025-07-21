import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  platform_id: string;

  @Column()
  name: string;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  productOrders: OrderProduct[];
}
