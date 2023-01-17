import { CartProduct } from "src/cart-products/entities/cart-product.entity";
import { Category } from "src/categories/entities/category.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";
import { ProductImage } from "src/product-images/entities/product-image.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @ManyToOne(() => Merchant, (merchant) => merchant.id)
  @JoinColumn({ name: "merchant_id" })
  merchant: Merchant;

  @OneToMany(() => CartProduct, (cart_product) => cart_product.product)
  cart_product: CartProduct[];

  @OneToOne(() => ProductImage, (product_image) => product_image.product)
  product_image: ProductImage;
}
