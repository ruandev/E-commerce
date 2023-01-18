import { IsString } from "class-validator";

export class CreateMerchantDto {
  @IsString()
  store_name: string;
}
