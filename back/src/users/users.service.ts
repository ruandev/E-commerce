import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const validationEmail = await this.userRepository.findOneBy({
      email,
    });

    if (validationEmail) return `E-mail já cadastrado`;

    createUserDto.password = await bcrypt.hash(password, 10);

    await this.userRepository.insert(createUserDto);
    return createUserDto;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return id;
  }
}
