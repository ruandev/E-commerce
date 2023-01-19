import { Module } from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import { AuthModule } from "src/auth/auth.module";
import { DatabaseModule } from "src/database/database.module";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { categoryProviders } from "./providers/category.providers";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [CategoriesController],
  providers: [...categoryProviders, CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
