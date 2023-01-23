import { Inject, Injectable } from "@nestjs/common";
import { CreateCartProductDto } from "./dto/create-cart-product.dto";
import { UpdateCartProductDto } from "./dto/update-cart-product.dto";
import { CartProduct } from "./entities/cart-product.entity";
import { Repository } from "typeorm";
import { CartsService } from "src/carts/carts.service";
@Injectable()
export class CartProductsService {
  constructor(
    @Inject(CartsService)
    private readonly cartService: CartsService,
    @Inject("CARTPRODUCT_REPOSITORY")
    private cartProductsRepository: Repository<CartProduct>
  ) {}
  async create(createCartProductDto: CreateCartProductDto, id: string) {
    try {
      await this.cartService.create(id);
      const cartID = await this.cartService.findOne(id);

      const newCartProducts = {
        quantity: createCartProductDto.quantity,
        unt_price: createCartProductDto.unt_price,
        product: { id: createCartProductDto.product_id },
        cart: { id: cartID },
      };
      await this.cartProductsRepository.insert(newCartProducts);
      return newCartProducts;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll(id: string) {
    try {
      //ok
      const cartID = await this.cartService.findOne(id);
      const allProducts = await this.cartProductsRepository.find({
        where: {
          cart: { id: cartID },
        },
        relations: {
          cart: true,
        },
      });
      return allProducts;
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return `This action updates a #${id} cartProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartProduct`;
  }
}
