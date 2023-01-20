import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartsService {
  constructor(
    @Inject("CART_REPOSITORY")
    private cartRepository: Repository<Cart>
  ) {}
  async create(createCartDto: CreateCartDto, id: string) {
    const newCart = {
      status: createCartDto.status,
      user: { id },
      payment_method: { id: createCartDto.payment_method },
    };

    return await this.cartRepository.insert(newCart);
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
