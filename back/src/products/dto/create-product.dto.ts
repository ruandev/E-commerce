import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  titile: string;

  @IsString()
  product_description: string;

  @IsNumber()
  unit_price: number;

  @IsNumber()
  stock: number;

  @IsNumber()
  category_id: number;

  @IsString()
  merchant_id: string;
}
