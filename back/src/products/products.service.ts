import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { uploadFile, deleteFile, deleteFolder } from "../aws/storage";
import { Request } from "express";
import { ILike } from "typeorm";
@Injectable()
export class ProductsService {
  constructor(
    @Inject("PRODUCT_REPOSITORY")
    private productRepository: Repository<Product>
  ) {}

  async uploadImage(file: any, id: string) {
    //OK
    try {
      if (!id) return { message: "Id esperado" };
      if (!file)
        return { message: "Arquivo impossibilitado de ser adicionado" };
      const image = await uploadFile(
        `${id}/${file.originalname}`,
        file.buffer,
        file.mimetype
      );
      return image;
    } catch (error) {
      return error;
    }
  }

  async create(createProductDto: CreateProductDto, id: string) {
    //OK
    const { category_id } = createProductDto;
    try {
      delete createProductDto.category_id;
      const product = {
        ...createProductDto,
        merchant: { id },
        category: { id: category_id },
      };

      await this.productRepository.insert(product);
      return product;
    } catch (error) {
      return error;
    }
  }

  async findAll(req: Request) {
    //ok
    const { title } = req.query;
    try {
      if (title) {
        const allProducts = await this.productRepository.find({
          select: {
            category: {
              description: true,
            },
          },
          relations: {
            category: true,
          },
          where: {
            title: ILike(`%${title}_%`),
          },
        });
        return allProducts;
      } else {
        const allProducts = await this.productRepository.find({
          select: {
            category: {
              description: true,
            },
          },
          relations: {
            category: true,
          },
        });
        return allProducts;
      }
    } catch (error) {
      return error;
    }
  }

  async findAllForMerchant(id: string) {
    //ok
    try {
      const allProducts = await this.productRepository.find({
        select: {
          category: {
            description: true,
          },
        },
        relations: {
          category: true,
        },
        where: {
          merchant: { id },
        },
      });
      return allProducts;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    //ok
    try {
      const oneProduct = await this.productRepository.find({
        where: { id },
        select: {
          category: {
            description: true,
          },
        },
        relations: {
          category: true,
        },
      });
      return oneProduct;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    //OK
    const { path_image_delete } = updateProductDto;
    const { category_id } = updateProductDto;

    try {
      await deleteFile(path_image_delete);

      delete updateProductDto.path_image_delete;
      delete updateProductDto.category_id;
      const product = {
        ...updateProductDto,
        category: { id: category_id },
      };

      await this.productRepository.update(id, product);

      return { message: "Produto atualizado com sucesso" };
    } catch (error) {
      return error;
    }
  }

  async updateStock(id: string, stock: number) {
    //OK
    try {
      const product = await this.productRepository.findOneBy({ id });
      const currentStock = product.stock - stock;
      if (currentStock <= 0) return { message: `${product.title} esgotado!` };
      await this.productRepository.update(id, { stock: currentStock });
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    //Ok
    try {
      const product = await this.productRepository.findOneBy({ id });

      await deleteFile(product.path_image);

      await this.productRepository.remove(product);

      return { message: "Produto excluído com sucesso!" };
    } catch (error) {
      return error;
    }
  }

  async deleteAllProducts(id: string) {
    try {
      await deleteFolder(id);
      await this.productRepository.delete({ merchant: { id } });
    } catch (error) {
      return error;
    }
  }
}
