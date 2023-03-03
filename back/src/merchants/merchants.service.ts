import { Inject, Injectable } from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import { deleteFolder } from "src/aws/storage";
import { ProductsService } from "src/products/products.service";
import { Repository } from "typeorm";
import { CreateMerchantDto } from "./dto/create-merchant.dto";
import { UpdateMerchantDto } from "./dto/update-merchant.dto";
import { Merchant } from "./entities/merchant.entity";
@Injectable()
export class MerchantsService {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productService: ProductsService,
    @Inject("MERCHANT_REPOSITORY")
    private merchantRepository: Repository<Merchant>
  ) {}

  async create(id: string, createMerchantDto: CreateMerchantDto) {
    const { store_name } = createMerchantDto;
    //OK
    try {
      const storeNameValidation = await this.merchantRepository.findOneBy({
        store_name,
      });
      if (storeNameValidation)
        return { message: "Esse nome já está sendo utilizado por outra loja!" };

      const newUser = {
        store_name,
        user: { id },
      };

      const { raw: merchant } = await this.merchantRepository.insert(newUser);

      return {
        store_name: store_name,
        id: merchant[0].id,
      };
    } catch (error) {
      if (error.code === "23505") {
        return { message: "O usuário já tem uma loja ativa!" };
      }
      return error;
    }
  }

  async profile(id: string) {
    const merchant = await this.merchantRepository.findOneBy({ user: { id } });
    if (!merchant) return "";
    return { id: merchant.id, store_name: merchant.store_name };
  }

  async update(id: string, updateMerchantDto: UpdateMerchantDto) {
    try {
      const merchant = await this.merchantRepository.find({
        select: {
          user: {
            id: true,
          },
        },
        where: {
          store_name: updateMerchantDto.store_name,
          user: { id },
        },
        relations: {
          user: true,
        },
      });

      if (merchant[0] && merchant[0].user.id !== id) {
        return { message: "Nome de loja já cadastrado!" };
      }

      await this.merchantRepository.update(
        { user: { id } },
        { store_name: updateMerchantDto.store_name }
      );
      return { message: "Nome da loja foi atualizado com sucesso!" };
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      const merchant = await this.merchantRepository.findOneBy({
        user: { id },
      });
      await this.productService.deleteAllProducts(merchant.id);
      await this.merchantRepository.delete({ id: merchant.id });
      await deleteFolder(`${id}/`);
      return { message: "Loja excluida com sucesso!" };
    } catch (error) {
      return error;
    }
  }
}
