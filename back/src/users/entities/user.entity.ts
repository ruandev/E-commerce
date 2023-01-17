import { Cart } from "src/carts/entities/cart.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column("text")
  password: string;

  @OneToOne(() => Merchant, (merchant) => merchant.user)
  merchant: Merchant;

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart;
}
