import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log(email, password);
    const user = await this.usersService.login({ email, password });
    console.log(user);
    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }
}
