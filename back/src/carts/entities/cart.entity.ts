import { CartProduct } from "src/cart-products/entities/cart-product.entity";
import { PaymentMethod } from "src/payment-method/entities/payment-method.entity";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean" })
  status: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => PaymentMethod, (payment_method) => payment_method.id)
  @JoinColumn({ name: "payment_method" })
  payment_method: PaymentMethod[];

  @OneToMany(() => CartProduct, (cart_product) => cart_product.cart)
  cart_product: CartProduct[];
}