import { CartProduct } from "../../cart-products/entities/cart-product.entity";
import { PaymentMethod } from "../../payment-method/entities/payment-method.entity";
import { User } from "../../users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @OneToOne(() => PaymentMethod, (payment_method) => payment_method.id)
  @JoinColumn({ name: "payment_method" })
  payment_method: PaymentMethod;

  @OneToMany(() => CartProduct, (cart_product) => cart_product.cart)
  cart_product: CartProduct[];
}
