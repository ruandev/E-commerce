import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { MerchantsService } from "./merchants.service";
import { CreateMerchantDto } from "./dto/create-merchant.dto";
import { UpdateMerchantDto } from "./dto/update-merchant.dto";

@Controller("merchants")
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post("cadaster")
  create(
    @Param("id") id: string,
    @Body() createMerchantDto: CreateMerchantDto
  ) {
    return this.merchantsService.create(id, createMerchantDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.merchantsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMerchantDto: UpdateMerchantDto
  ) {
    return this.merchantsService.update(id, updateMerchantDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.merchantsService.remove(id);
  }
}
