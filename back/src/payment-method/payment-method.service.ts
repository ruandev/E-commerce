import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaymentMethod } from "./entities/payment-method.entity";
@Injectable()
export class PaymentMethodService {
  constructor(
    @Inject("PAYMENTMETHOD_REPOSITORY")
    private paymentRepository: Repository<PaymentMethod>
  ) {}
  async findAll() {
    try {
      const allMethods = await this.paymentRepository.find();
      return allMethods;
    } catch (error) {
      return error;
    }
  }
}
