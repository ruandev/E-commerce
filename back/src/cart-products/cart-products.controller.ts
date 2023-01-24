import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";

import { CartProductsService } from "./cart-products.service";
import { CreateCartProductDto } from "./dto/create-cart-product.dto";
import { UpdateCartProductDto } from "./dto/update-cart-product.dto";

@Controller("cart-products")
export class CartProductsController {
  constructor(private readonly cartProductsService: CartProductsService) {}
  @Post("add/:id")
  create(
    @Body() createCartProductDto: CreateCartProductDto,
    @Param("id") id: string
  ) {
    return this.cartProductsService.create(createCartProductDto, id);
  }

  @Get("allProducts/:id")
  findAll(@Param("id") id: string) {
    return this.cartProductsService.findAll(id);
  }

  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateCartProductDto: UpdateCartProductDto
  ) {
    return this.cartProductsService.update(id, updateCartProductDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.cartProductsService.remove(id);
  }
}
