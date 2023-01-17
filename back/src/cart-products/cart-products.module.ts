import { Module } from "@nestjs/common";
import { CartProductsService } from "./cart-products.service";
import { CartProductsController } from "./cart-products.controller";

@Module({
  controllers: [CartProductsController],
  providers: [CartProductsService],
})
export class CartProductsModule {}
