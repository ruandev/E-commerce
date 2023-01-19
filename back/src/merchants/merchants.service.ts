import { Inject, Injectable } from "@nestjs/common";
import { CreateMerchantDto } from "./dto/create-merchant.dto";
import { UpdateMerchantDto } from "./dto/update-merchant.dto";
import { Merchant } from "./entities/merchant.entity";
import { Repository } from "typeorm";
@Injectable()
export class MerchantsService {
  constructor(
    @Inject("MERCHANT_REPOSITORY")
    private merchantRepository: Repository<Merchant>
  ) {}

  async create(id: string, createMerchantDto: CreateMerchantDto) {
    const { store_name } = createMerchantDto;

    try {
      const storeNameValidation = await this.merchantRepository.findOneBy({
        store_name,
      });
      if (storeNameValidation)
        return "Esse nome já está sendo utilizado por outra loja";

      const user = {
        store_name,
        user_id: id,
      };

      await this.merchantRepository.insert(user);

      return user;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const merchant = await this.merchantRepository.findOneBy({
        user: { id },
      });
      if (merchant) return "Bem vindo a sua loja!";
      else return "Crie sua loja!";
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
          return "Nome de loja já utilizado";
      }
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      const merchant = await this.merchantRepository.findOneBy({ id });

      const deleteMerchant = await this.merchantRepository.remove(merchant);

      return deleteMerchant;
    } catch (error) {
      return error;
    }
  }
}
