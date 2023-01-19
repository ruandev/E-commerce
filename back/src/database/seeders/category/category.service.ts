import { Inject, Injectable } from "@nestjs/common";
import { Category } from "src/categories/entities/category.entity";
import { ICategory } from "src/interfaces/ICategory";
import { Repository } from "typeorm";
import { categories } from "./data";

@Injectable()
export class CategorySeederService {
  constructor(
    @Inject("CATEGORY_REPOSITORY")
    private readonly categoryRepository: Repository<Category>
  ) {}

  create(): Array<Promise<Category>> {
    return categories.map(async (category: ICategory) => {
      return await this.categoryRepository
        .findOneBy({ description: category.description })
        .then(async (findCategory) => {
          if (findCategory) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.categoryRepository.save(category));
        })
        .catch((error: any) => Promise.reject(error));
    });
  }
}
