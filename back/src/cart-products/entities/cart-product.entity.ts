import { Cart } from "../../carts/entities/cart.entity";
import { Product } from "../../products/entities/product.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";

@Entity("cart_products")
export class CartProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "decimal" })
  unt_price: number;

  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({ name: "cart_id" })
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: "product_id" })
  product: Product;
}
