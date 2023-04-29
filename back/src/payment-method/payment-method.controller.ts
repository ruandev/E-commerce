import { Controller, Get, Post, Body } from "@nestjs/common";
import { PaymentMethodService } from "./payment-method.service";
import { CreatePaymentMethodDto } from "./dto/create-paymentmethod.dto";
@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}
  @Post("create")
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }
}
