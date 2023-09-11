import { CacheStoreController } from './cache-store/cachestore.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Store } from './store/store';
import { UserStore } from './store/UserStore';
import { ConfigModule } from './config/config.module';
import { JobsModule } from './jobs/jobs.module';
import { CacheStoreModule } from './cache-store/cachestore.module';


// let no = 50;
// const configServiceProviders = {
//   provide:"config",
//   useClass:no === 5 ? Store:UserStore
// }

@Module({
  imports: [ConfigModule.register({Store_Name:"YT_STORE"}), JobsModule,
    CacheStoreModule.forRoot({storeType:"File"})
],
  controllers: [AppController],
  providers: [AppService,
    UserStore,{
    provide:Store,
    useExisting:UserStore
  },
  // configServiceProviders,

  {
    provide:"DB_NAME",
    useValue:"Ninja's"
  }

],
})
export class AppModule {
}
