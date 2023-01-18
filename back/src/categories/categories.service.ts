import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
@Injectable()
export class CategoriesService {
  constructor(
    @Inject("CATEGORY_REPOSITORY")
    private categoryRepository: Repository<Category>
  ) {}
  async findAll() {
    const allCategories = await this.categoryRepository.find();
    return allCategories;
  }
}
