import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/createCategoryDto";

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // @Post("categories")
  // create(@Body() createCategoryDto: CreateCategoryDto) {
  //   return this.categoriesService.create(createCategoryDto);
  // }
  @Get("categories")
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.categoriesService.findAll();
  }
}
