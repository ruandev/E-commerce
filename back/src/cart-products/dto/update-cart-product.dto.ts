import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateCartProductDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  product_id: string;
}
