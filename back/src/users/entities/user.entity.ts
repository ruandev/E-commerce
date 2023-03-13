import { Cart } from "../../carts/entities/cart.entity";
import { Merchant } from "../../merchants/entities/merchant.entity";
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

  @Column({ type: "text" })
  first_name: string;

  @Column({ type: "text" })
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column("text")
  password: string;

  @OneToOne(() => Merchant, (merchant) => merchant.user)
  merchant: Merchant;

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];
}
