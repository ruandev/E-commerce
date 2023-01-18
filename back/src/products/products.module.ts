import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { productProviders } from "./providers/product.providers";
import { DatabaseModule } from "src/database/database.module";
import { forwardRef } from "@nestjs/common/utils";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [ProductsController],
  providers: [...productProviders, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
