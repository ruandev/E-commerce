import { Cart } from "../../carts/entities/cart.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_methods")
export class PaymentMethod {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  method: string;

  @OneToOne(() => Cart, (cart) => cart.payment_method)
  cart: Cart;
}
