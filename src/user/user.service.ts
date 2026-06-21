import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  constructor(private readonly helloService: HelloService) {}

  getAllUser() {
    return [
      {
        id: 1,
        name: 'Arafat',
      },
      {
        id: 2,
        name: 'Hablu',
      },
      {
        id: 3,
        name: 'Bablu',
      },
    ];
  }
}
