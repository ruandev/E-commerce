import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
  constructor(
    @Inject("PRODUCT_REPOSITORY")
    private productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const newProduct = await this.productRepository.insert(createProductDto);
      return newProduct;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const allProducts = await this.productRepository.find();
      return allProducts;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const oneProduct = await this.productRepository.findOneBy({ id });
      return oneProduct;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      //FAZER COM TESTE, ID DO USUARIO E ID DO PRODUTO
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      //FAZER COM TESTE, ID DO USUARIO E ID DO PRODUTO
    } catch (error) {
      return error;
    }
  }
}
