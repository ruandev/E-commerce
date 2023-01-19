import { Inject, Injectable } from "@nestjs/common";
import { ICategory } from "src/interfaces/ICategory";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/createCategoryDto";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {
  constructor(
    @Inject("CATEGORY_REPOSITORY")
    private categoryRepository: Repository<Category>
  ) {}

  // async create(createCategoryDto: CreateCategoryDto) {
  //   try {
  //     const createCategory = await this.categoryRepository.insert(
  //       createCategoryDto
  //     );
  //     return createCategory;
  //   } catch (error) {
  //     return error;
  //   }
  // }
  async findAll() {
    try {
      const allCategories = await this.categoryRepository.find();
      return allCategories;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
