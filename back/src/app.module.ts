import { NestModule } from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CartProductsModule } from "./cart-products/cart-products.module";
import { CartsModule } from "./carts/carts.module";
import { CategoriesModule } from "./categories/categories.module";
import { MerchantsModule } from "./merchants/merchants.module";
import validateSchema from "./middleware/yupValidation";
import { PaymentMethodModule } from "./payment-method/payment-method.module";
import { ProductsModule } from "./products/products.module";
import { cadasterSchema } from "./schemas/cadasterUser.schema";
import { loginSchema } from "./schemas/loginUser.schema";
import { updateUserSchema } from "./schemas/updateUser.schema";
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validateSchema(cadasterSchema)).forRoutes("user/cadaster"),
      consumer.apply(validateSchema(loginSchema)).forRoutes("user/login"),
      consumer
        .apply(validateSchema(updateUserSchema))
        .forRoutes("user/update/:id");
  }
}
