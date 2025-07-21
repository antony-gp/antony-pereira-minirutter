import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class OrderProduct {
  @PrimaryColumn()
  order_id: string;

  @PrimaryColumn()
  product_id: string;

  @ManyToOne(() => Order, (order) => order.line_items)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.productOrders)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
