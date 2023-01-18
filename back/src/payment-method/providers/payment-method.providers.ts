import { DataSource } from "typeorm";
import { PaymentMethod } from "../entities/payment-method.entity";

export const paymentProviders = [
  {
    provide: "PAYMENTMETHOD_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PaymentMethod),
    inject: ["DATA_SOURCE"],
  },
];
