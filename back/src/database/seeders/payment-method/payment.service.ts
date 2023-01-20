import { Inject, Injectable } from "@nestjs/common";
import { ICategory } from "src/interfaces/ICategory";
import { PaymentMethod } from "src/payment-method/entities/payment-method.entity";
import { Repository } from "typeorm";
import { payments } from "./data";

@Injectable()
export class PaymentSeederService {
  constructor(
    @Inject("PAYMENTMETHOD_REPOSITORY")
    private readonly paymentMethodRepository: Repository<PaymentMethod>
  ) {}

  create(): Array<Promise<PaymentMethod>> {
    return payments.map(async (payment: ICategory) => {
      return await this.paymentMethodRepository
        .findOneBy({ description: payment.description })
        .then(async (findPayment) => {
          if (findPayment) {
            return Promise.resolve(null);
          }
          return Promise.resolve(
            await this.paymentMethodRepository.save(payment)
          );
        })
        .catch((error: any) => Promise.reject(error));
    });
  }
}
