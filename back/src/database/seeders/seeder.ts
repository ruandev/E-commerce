import { Injectable } from "@nestjs/common";
import { Logger } from "@nestjs/common/services";
import { CategorySeederService } from "./category/category.service";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly categorySeederService: CategorySeederService
  ) {}
  async seed() {
    await this.categories()
      .then((completed) => {
        this.logger.debug("Successfuly completed seeding users...");
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error("Failed seeding users...");
        Promise.reject(error);
      });
  }
  async categories() {
    let countSuccess = 0;
    let countFailed = 0;
    this.categorySeederService.create().forEach((element) => {
      element.then(() => countSuccess++).catch(() => countFailed++);
    });

    if (countFailed > 0) {
      return Promise.reject("Erro");
    }
    return Promise.resolve(true);
  }
}
