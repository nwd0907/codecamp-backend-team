import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createProduct(): string{
    return '상품 등록 기능'
  }
}
