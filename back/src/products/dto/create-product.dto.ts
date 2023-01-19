import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  product_description: string;

  @IsNumber()
  unit_price: number;

  @IsNumber()
  stock: number;

  @IsString()
  url: string;

  @IsNumber()
  category_id: number;

  @IsString()
  merchant_id: string;
}
