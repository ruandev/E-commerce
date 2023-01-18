import { Module } from "@nestjs/common";
import { MerchantsService } from "./merchants.service";
import { MerchantsController } from "./merchants.controller";
import { DatabaseModule } from "src/database/database.module";
import { AuthModule } from "src/auth/auth.module";
import { forwardRef } from "@nestjs/common/utils";
import { merchantProviders } from "./providers/merchant.providers";
@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [MerchantsController],
  providers: [...merchantProviders, MerchantsService],
  exports: [MerchantsService],
})
export class MerchantsModule {}
