import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @Inject("CATEGORY_REPOSITORY")
    private categoryRepository: Repository<Category>
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      await this.categoryRepository.insert(createCategoryDto);
      return;
    } catch (error) {
      console.log(error);
    }
  }
  async findAll() {
    try {
      const allCategories = await this.categoryRepository.find();
      return allCategories;
    } catch (error) {
      return error;
    }
  }
}
