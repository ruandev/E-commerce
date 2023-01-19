import { Module } from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PaymentMethodModule } from "../payment-method/payment-method.module";
import { CategoriesModule } from "../categories/categories.module";
import { MerchantsModule } from "../merchants/merchants.module";
import { ProductsModule } from "../products/products.module";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => MerchantsModule),
    forwardRef(() => ProductsModule),
    forwardRef(() => CategoriesModule),
    forwardRef(() => PaymentMethodModule),
    PassportModule,
    JwtModule.register({
      secret: "batatinha",
      signOptions: { expiresIn: "2h" },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
