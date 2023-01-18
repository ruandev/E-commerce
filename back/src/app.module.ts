import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CartProductsModule } from "./cart-products/cart-products.module";
import { CartsModule } from "./carts/carts.module";
import { CategoriesModule } from "./categories/categories.module";
import { MerchantsModule } from "./merchants/merchants.module";
import { PaymentMethodModule } from "./payment-method/payment-method.module";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    CartsModule,
    MerchantsModule,
    CartProductsModule,
    ProductsModule,
    PaymentMethodModule,
    CategoriesModule,
  ],
})
export class AppModule {}
