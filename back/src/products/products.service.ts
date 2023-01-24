import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { uploadFile, deleteFile } from "../aws/storage";
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

  async findAll() {
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
      });
      return allProducts;
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
}
