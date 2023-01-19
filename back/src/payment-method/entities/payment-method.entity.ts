import { Cart } from "../../carts/entities/cart.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_methods")
export class PaymentMethod {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => Cart, (cart) => cart.payment_method)
  cart: Cart;
}
