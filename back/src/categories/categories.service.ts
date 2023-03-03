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
    try {
      const allCategories = await this.categoryRepository.find();
      return allCategories;
    } catch (error) {
      return error;
    }
  }
}
