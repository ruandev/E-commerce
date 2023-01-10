import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { store_name, email, password } = createUserDto;

    const validationStoreName = await this.userRepository.findOneBy({
      store_name,
    });
    if (validationStoreName) return "Nome de loja já cadastrado";

    const validationEmail = await this.userRepository.findOneBy({
      email,
    });

    if (validationEmail) return `E-mail já cadastrado`;

    const passwordEncrypted = await bcrypt.hash(password, 10);

    const user = {
      store_name,
      email,
      password: passwordEncrypted,
    };
    await this.userRepository.insert(user);
    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    // const { email, password } = loginUserDto;
    // return this.userRepository.findOneBy({ email });
    return loginUserDto;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return id;
  }
}
