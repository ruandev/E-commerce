import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaymentMethod } from "./entities/payment-method.entity";
import { CreatePaymentMethodDto } from "./dto/create-paymentmethod.dto";
@Injectable()
export class PaymentMethodService {
  constructor(
    @Inject("PAYMENTMETHOD_REPOSITORY")
    private paymentRepository: Repository<PaymentMethod>
  ) {}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    try {
      await this.paymentRepository.insert(createPaymentMethodDto);
      return;
    } catch (error) {
      console.log(error);
    }
  }
  async findAll() {
    try {
      const allMethods = await this.paymentRepository.find();
      return allMethods;
    } catch (error) {
      return error;
    }
  }
}
