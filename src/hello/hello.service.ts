import { Injectable } from '@nestjs/common';

// we write all the business logic

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello is Calling from NEST JS';
  }
}
