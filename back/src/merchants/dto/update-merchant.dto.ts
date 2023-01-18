import { IsString } from "class-validator";
export class UpdateMerchantDto {
  @IsString()
  store_name: string;
}
