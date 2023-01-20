import { IsBoolean, IsString } from "class-validator";

export class CreateCartDto {
  @IsBoolean()
  status: boolean;

  @IsString()
  payment_method: string;
}
