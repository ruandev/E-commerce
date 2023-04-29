import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller("category")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Post("create")
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }
  @Get("categories")
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.categoriesService.findAll();
  }
}
