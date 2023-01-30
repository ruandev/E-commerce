import { Inject, Injectable } from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import * as bcrypt from "bcrypt";
import { MerchantsService } from "src/merchants/merchants.service";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => MerchantsService))
    private readonly merchantService: MerchantsService,
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    //OK
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
    //OK
    return this.userRepository.findOneBy({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { email, password } = updateUserDto;

    try {
      const user = await this.userRepository.findOneBy({ id });

      if (email) {
        const validationEmail = await this.userRepository.findOneBy({ email });
        if (validationEmail && validationEmail.email !== user.email)
          return "E-mail já cadastrado!";
      }

      if (password) {
        updateUserDto.password = await bcrypt.hash(password, 10);
      }

      const updateUser = await this.userRepository.update(id, updateUserDto);

      return updateUser;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      await this.userRepository.delete({ id });
      await this.merchantService.remove(id);
      return "Usuário excluído com sucesso!";
    } catch (error) {
      return error;
    }
  }
}
