import { Module } from "@nestjs/common/decorators";
import { categoryProviders } from "src/categories/providers/category.providers";
import { DatabaseModule } from "src/database/database.module";
import { CategorySeederService } from "./category.service";

@Module({
  imports: [DatabaseModule],
  providers: [...categoryProviders, CategorySeederService],
  exports: [CategorySeederService],
})
export class CategorySeederModule {}
