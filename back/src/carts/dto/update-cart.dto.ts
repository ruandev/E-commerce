import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateCartDto {
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsString()
  @IsNotEmpty()
  payment_method: string;
}
