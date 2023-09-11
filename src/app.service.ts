import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { CacheStoreService } from './cache-store/cachestore.service';

@Injectable()
export class AppService {
  constructor(
    private configService:ConfigService,
    private cacheStore:CacheStoreService
  
    ){
    // console.log(this.configService);
    // console.log(this.cacheStore);
    
    
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
