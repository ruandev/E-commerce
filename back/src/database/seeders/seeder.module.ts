import { Module } from "@nestjs/common/decorators";
import { Logger } from "@nestjs/common/services";
import { DatabaseModule } from "../database.module";
import { CategorySeederModule } from "./category/category.module";
import { Seeder } from "./seeder";

@Module({
  imports: [DatabaseModule, CategorySeederModule],
  providers: [Logger, Seeder],
})
export class SeederModule {}
