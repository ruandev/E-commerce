import { Module } from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import { AuthModule } from "src/auth/auth.module";
import { DatabaseModule } from "src/database/database.module";
import { MerchantsModule } from "src/merchants/merchants.module";
import { userProviders } from "./providers/user.providers";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), MerchantsModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
