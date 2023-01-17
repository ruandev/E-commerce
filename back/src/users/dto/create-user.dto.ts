import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  frist_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
