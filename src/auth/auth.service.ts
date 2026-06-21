import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser() {
    /**
     * 1. Check the User is already exist or not
     * 2. hash the password
     * 3. store the user into db
     * 4. generate jwt token
     * 5. send token in the response
     */
    return this.userService.createUser();
  }
}
