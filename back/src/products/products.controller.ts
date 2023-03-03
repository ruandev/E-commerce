import {
  Bind,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Req } from "@nestjs/common/decorators";
import { FileInterceptor } from "@nestjs/platform-express";
import { Request } from "express";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";

@Controller("product")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post("upload/:id")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("file"))
  @Bind(UploadedFile())
  uploadFile(file: any, @Param("id") id: string) {
    return this.productsService.uploadImage(file, id);
  }

  @Post("cadaster/:id")
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductDto: CreateProductDto, @Param("id") id: string) {
    return this.productsService.create(createProductDto, id);
  }

  @Get("findAll")
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: Request) {
    return this.productsService.findAll(req);
  }

  @Get("findAllForMerchant/:id")
  @UseGuards(JwtAuthGuard)
  findAllForMerchant(@Param("id") id: string) {
    return this.productsService.findAllForMerchant(id);
  }

  @Get("findOne/:id")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(id);
  }

  @Patch("update/:id")
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }
  @Patch("updateStock/:id/:stock")
  @UseGuards(JwtAuthGuard)
  updateStock(@Param("id") id: string, @Param("stock") stock: number) {
    return this.productsService.updateStock(id, stock);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(id);
  }

  @Delete("deleteAllProducts/:id")
  deleteAllProducts(@Param("id") id: string) {
    return this.productsService.deleteAllProducts(id);
  }
}
