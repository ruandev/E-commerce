import { Product } from "../../products/entities/product.entity";
import { User } from "../../users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("merchants")
export class Merchant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", unique: true })
  store_name: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Product, (product) => product.merchant)
  product: Product[];
}
