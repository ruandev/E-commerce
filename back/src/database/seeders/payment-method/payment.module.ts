import { Module } from "@nestjs/common/decorators";
import { DatabaseModule } from "src/database/database.module";
import { paymentProviders } from "src/payment-method/providers/payment-method.providers";
import { PaymentSeederService } from "./payment.service";

@Module({
  imports: [DatabaseModule],
  providers: [...paymentProviders, PaymentSeederService],
  exports: [PaymentSeederService],
})
export class PaymentSeederModule {}
