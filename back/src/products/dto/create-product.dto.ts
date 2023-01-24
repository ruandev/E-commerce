import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  product_description: string;

  @IsNumber()
  @IsNotEmpty()
  unt_price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsString()
  @IsNotEmpty()
  url_image: string;

  @IsString()
  @IsNotEmpty()
  path_image: string;

  @IsString()
  @IsNotEmpty()
  category_id: string;
}
