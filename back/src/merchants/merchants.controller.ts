import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { MerchantsService } from "./merchants.service";
import { CreateMerchantDto } from "./dto/create-merchant.dto";
import { UpdateMerchantDto } from "./dto/update-merchant.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("merchants")
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post("cadaster")
  @UseGuards(JwtAuthGuard)
  create(
    @Param("id") id: string,
    @Body() createMerchantDto: CreateMerchantDto
  ) {
    return this.merchantsService.create(id, createMerchantDto);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.merchantsService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(
    @Param("id") id: string,
    @Body() updateMerchantDto: UpdateMerchantDto
  ) {
    return this.merchantsService.update(id, updateMerchantDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.merchantsService.remove(id);
  }
}
