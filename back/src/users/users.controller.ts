import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("user")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }

  @Post("cadaster")
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post("login")
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    return this.authService.login(req);
  }

  @Patch("update/:id")
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
  @Delete("delete/:id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
