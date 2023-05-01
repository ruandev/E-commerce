import { Module } from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import { AuthModule } from "src/auth/auth.module";
import { DatabaseModule } from "src/database/database.module";
import { MerchantsModule } from "src/merchants/merchants.module";
import { userProviders } from "./providers/user.providers";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { CartsModule } from "../carts/carts.module";

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AuthModule),
    MerchantsModule,
    CartsModule,
  ],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
