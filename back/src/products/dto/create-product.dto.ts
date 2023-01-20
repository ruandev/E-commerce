import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  product_description: string;

  @IsNumber()
  unt_price: number;

  @IsNumber()
  stock: number;

  @IsString()
  url_image: string;

  @IsString()
  category_id: string;
}
