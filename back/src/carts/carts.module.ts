import { forwardRef, Module } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { CartsController } from "./carts.controller";
import { cartProviders } from "./providers/merchant.providers";
import { DatabaseModule } from "src/database/database.module";
import { AuthModule } from "src/auth/auth.module";
import { CartProductsModule } from "src/cart-products/cart-products.module";

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AuthModule),
    forwardRef(() => CartProductsModule),
  ],
  controllers: [CartsController],
  providers: [...cartProviders, CartsService],
  exports: [CartsService],
})
export class CartsModule {}
