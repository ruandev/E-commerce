import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("cadaster")
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post("login")
  @UseGuards(LocalAuthGuard)
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
