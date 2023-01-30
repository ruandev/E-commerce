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
      const user = await this.merchantRepository.findOneBy({ id });
      if (user) return { message: "Usuário já tem uma loja ativa!" };

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

      return merchant[0].id;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findOne(id: string) {
    //OK
    try {
      const merchant = await this.merchantRepository.findOneBy({
        user: { id },
      });
      if (merchant) return { message: "Bem vindo a sua loja!" };
      else return { message: "Crie sua loja!" };
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateMerchantDto: UpdateMerchantDto) {
    const { store_name } = updateMerchantDto;

    try {
      const merchant = await this.merchantRepository.findOneBy({ id });

      if (store_name) {
        const findStoreName = await this.merchantRepository.findOneBy({
          store_name,
        });
        if (findStoreName && findStoreName.store_name !== merchant.store_name)
          return { message: "Nome de loja já utilizado" };
      }
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      const merchant = await this.merchantRepository.findOneBy({ id });

      await this.merchantRepository.remove(merchant);
      await this.productService.deleteAllProducts(merchant.id);
      await deleteFolder(`${id}/`);
      return "Usuário deletado com sucesso!";
    } catch (error) {
      return error;
    }
  }
}
