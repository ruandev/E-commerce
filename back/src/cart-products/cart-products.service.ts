import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { CreateCartProductDto } from "./dto/create-cart-product.dto";
import { UpdateCartProductDto } from "./dto/update-cart-product.dto";
import { CartProduct } from "./entities/cart-product.entity";
import { Repository } from "typeorm";
import { CartsService } from "src/carts/carts.service";
import { ProductsService } from "src/products/products.service";

@Injectable()
export class CartProductsService {
  constructor(
    @Inject(forwardRef(() => CartsService))
    private readonly cartService: CartsService,
    @Inject(ProductsService)
    private readonly productService: ProductsService,
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
      const amount = allProducts
        .reduce((acc, val) => {
          return Number(acc) + Number(val.quantity) * Number(val.unt_price);
        }, 0)
        .toFixed(2);

      const quantityItems = allProducts.reduce((acc, val) => {
        return Number(acc) + Number(val.quantity);
      }, 0);

      return { allProducts, quantityItems, amount };
    } catch (error) {
      return error;
    }
  }

  async finalizingCart(id: string) {
    const cartID = await this.cartService.findOne(id);

    const allProducts = await this.cartProductsRepository.find({
      where: {
        cart: { id: cartID },
      },
      relations: {
        cart: true,
        product: true,
      },
    });

    const updateStocks = allProducts.forEach(async (element) => {
      await this.productService.updateStock(
        element.product.id,
        element.quantity
      );
    });
  }

  async update(id: string, updateCartProductDto: UpdateCartProductDto) {
    try {
      const cartID = await this.cartService.findOne(id);
      await this.cartProductsRepository.update(
        {
          cart: { id: cartID },
          product: { id: updateCartProductDto.product_id },
        },
        { quantity: updateCartProductDto.quantity }
      );
      return { message: "Quantidade atualizada com sucesso!" };
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      await this.cartProductsRepository.delete({ product: { id } });
    } catch (error) {
      return error;
    }
  }
}
