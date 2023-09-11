import { DynamicModule, Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';

const storeOptions = Object.assign({
  Store_Name:"Default Store",
  Store_Type:"Default Type"
})

@Module({
  providers:[ConfigService,{
    provide: 'CONFIG_OPTIONS',
    useValue: storeOptions
  }],
  controllers:[ConfigController],
  exports:[ConfigService]

})

export class ConfigModule {
   
  static register(options:any):DynamicModule {

    const storeOptions = Object.assign({
      Store_Name:"Default Store",
      Store_Type:"Default Type"
    }, options)

    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: storeOptions
        },
      ],

    };
  }

}
