import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CategoriesService } from "./categories.service";

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get("categories")
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.categoriesService.findAll();
  }
}
