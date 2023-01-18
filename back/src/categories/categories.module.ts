import { Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { DatabaseModule } from "src/database/database.module";
import { AuthModule } from "src/auth/auth.module";
import { categoryProviders } from "./providers/category.providers";
import { forwardRef } from "@nestjs/common/utils";
@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [CategoriesController],
  providers: [...categoryProviders, CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
