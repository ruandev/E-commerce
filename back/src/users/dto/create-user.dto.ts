import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  store_name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
