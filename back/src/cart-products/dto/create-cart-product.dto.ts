import { IsNumber, IsString } from "class-validator";

export class CreateCartProductDto {
  @IsString()
  product_id: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  unt_price: number;
}
