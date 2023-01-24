import { PartialType } from "@nestjs/mapped-types";
import { IsNumber } from "class-validator";
import { CreateCartProductDto } from "./create-cart-product.dto";

export class UpdateCartProductDto {
  @IsNumber()
  quantity: number;
}
