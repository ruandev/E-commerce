import { Inject, Injectable } from "@nestjs/common";
import { CreateCartProductDto } from "./dto/create-cart-product.dto";
import { UpdateCartProductDto } from "./dto/update-cart-product.dto";
import { CartProduct } from "./entities/cart-product.entity";
import { Repository } from "typeorm";
@Injectable()
export class CartProductsService {
  constructor(
    @Inject("CARTPRODUCT_REPOSITORY")
    private cartProductsRepository: Repository<CartProduct>
  ) {}
  async create(createCartProductDto: CreateCartProductDto, id: string) {
    const newCartProducts = {
      quantity: createCartProductDto.quantity,
      unt_price: createCartProductDto.unt_price,
      product: { id: createCartProductDto.product_id },
      cart: { id },
    };
    await this.cartProductsRepository.insert(newCartProducts);
    return newCartProducts;
  }

  findAll() {
    return `This action returns all cartProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartProduct`;
  }

  update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return `This action updates a #${id} cartProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartProduct`;
  }
}
