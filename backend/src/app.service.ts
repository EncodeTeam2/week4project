import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  mint(value: number, address: string): Promise<void> {
    // TODO document why this method 'mint' is empty
  }
}
