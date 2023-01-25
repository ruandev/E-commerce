import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  Bind,
  UseInterceptors,
  UseGuards,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

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
  findAll() {
    return this.productsService.findAll();
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
}
