import { Controller, Get, Param } from "@nestjs/common";
import { PaymentMethodService } from "./payment-method.service";

@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentMethodService.findOne(id);
  }
}
