import { DataSource } from "typeorm";
import { CartProduct } from "../entities/cart-product.entity";

export const cartProductsProviders = [
  {
    provide: "CARTPRODUCT_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CartProduct),
    inject: ["DATA_SOURCE"],
  },
];
