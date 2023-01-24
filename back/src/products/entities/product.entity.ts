import { CartProduct } from "../../cart-products/entities/cart-product.entity";
import { Category } from "../../categories/entities/category.entity";
import { Merchant } from "../../merchants/entities/merchant.entity";

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  product_description: string;

  @Column({ type: "decimal" })
  unt_price: number;

  @Column({ type: "int" })
  stock: number;

  @Column({ type: "text" })
  url_image: string;

  @Column({ type: "text" })
  path_image: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.id)
  @JoinColumn({ name: "merchant_id" })
  merchant: Merchant;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => CartProduct, (cart_product) => cart_product.product)
  cart_product: CartProduct[];
}
