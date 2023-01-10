import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { DatabaseModule } from "src/database/database.module";
import { userProviders } from "./providers/user.providers";
import { AuthModule } from "src/auth/auth.module";
import { forwardRef } from "@nestjs/common/utils";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
