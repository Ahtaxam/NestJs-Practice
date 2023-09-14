import { DynamicModule, Module } from "@nestjs/common";
import { CacheStoreService } from "./cachestore.service";
import { CacheStoreController } from "./cachestore.controller";


let ROOT_STORE_OPTIONS:any;

@Module({
    providers:[CacheStoreService],
    exports:[CacheStoreService],
    
})

class RootCacheStoreModule{}


@Module({
})
export class CacheStoreModule{
    static forRoot(options?:any):DynamicModule {
        const STORE_OPTIONS = CacheStoreModule.buildStoreOptions(options);
        ROOT_STORE_OPTIONS = STORE_OPTIONS;
        return {
            module:RootCacheStoreModule,
            providers:[
               {
                provide:"STORE_OPTIONS",
                useValue:STORE_OPTIONS
               }
            ]
        }
    }


    static forFeature(storeName:any):DynamicModule {

        const STORE_NAME_TOKEN = `${storeName.toUpperCase()}-Store`;
        return {
            module:CacheStoreModule,
            imports:[RootCacheStoreModule],
            providers:[
               {
                provide:STORE_NAME_TOKEN,
                useFactory: (cacheStoreService: CacheStoreService) => {
                    const featureStoreOptions = CacheStoreModule.buildStoreOptions({
                      ...ROOT_STORE_OPTIONS,
                      storeName,
                    });
        
                    return cacheStoreService.createStore(featureStoreOptions);
                  },
                  inject: [CacheStoreService],
                },
               
            ],
            exports:[STORE_NAME_TOKEN]
        }
    }



    private static buildStoreOptions(options:any) {
        return Object.assign({
            storeName:"Default Name",
            storeType:"DefaultType"
        },options)
    }
}