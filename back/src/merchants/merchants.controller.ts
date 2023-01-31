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

@Controller("merchant")
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post("cadaster/:id")
  @UseGuards(JwtAuthGuard)
  create(
    @Param("id") id: string,
    @Body() createMerchantDto: CreateMerchantDto
  ) {
    return this.merchantsService.create(id, createMerchantDto);
  }

  @Get("profile/:id")
  @UseGuards(JwtAuthGuard)
  profile(@Param("id") id: string) {
    return this.merchantsService.profile(id);
  }
  @Patch("update/:id")
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
