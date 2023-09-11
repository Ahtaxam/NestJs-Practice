import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Store } from './store/store';
import { UserStore } from './store/UserStore';

@Controller()
export class AppController {
  constructor(private readonly userStore: Store) {
    
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
