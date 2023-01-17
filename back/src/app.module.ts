import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CartsModule } from "./carts/carts.module";
import { MerchantsModule } from "./merchants/merchants.module";
import { CartProductsModule } from "./cart-products/cart-products.module";
import { ProductsModule } from "./products/products.module";
import { PaymentMethodModule } from "./payment-method/payment-method.module";
import { ProductImagesModule } from "./product-images/product-images.module";
import { CategoriesModule } from "./categories/categories.module";
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    CartsModule,
    MerchantsModule,
    CartProductsModule,
    ProductsModule,
    PaymentMethodModule,
    ProductImagesModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
