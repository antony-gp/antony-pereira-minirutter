import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  platform_id: string;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  line_items: OrderProduct[];
}
