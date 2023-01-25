import { forwardRef, Module } from "@nestjs/common";
import { CartProductsService } from "./cart-products.service";
import { CartProductsController } from "./cart-products.controller";
import { AuthModule } from "src/auth/auth.module";
import { DatabaseModule } from "src/database/database.module";
import { cartProductsProviders } from "./providers/cart-product.providers";
import { CartsModule } from "src/carts/carts.module";
import { ProductsModule } from "src/products/products.module";

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AuthModule),
    forwardRef(() => CartsModule),
    ProductsModule,
  ],
  controllers: [CartProductsController],
  providers: [...cartProductsProviders, CartProductsService],
  exports: [CartProductsService],
})
export class CartProductsModule {}
