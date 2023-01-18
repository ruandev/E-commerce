import { Module } from "@nestjs/common";
import { PaymentMethodService } from "./payment-method.service";
import { PaymentMethodController } from "./payment-method.controller";
import { AuthModule } from "src/auth/auth.module";
import { DatabaseModule } from "src/database/database.module";
import { paymentProviders } from "./providers/payment-method.providers";
import { forwardRef } from "@nestjs/common/utils";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [PaymentMethodController],
  providers: [...paymentProviders, PaymentMethodService],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
