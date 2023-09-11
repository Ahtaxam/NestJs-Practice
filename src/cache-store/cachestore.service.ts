import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CacheStoreService{
    constructor(){
        
    }

    createStore(storeOptions: any) {
      console.log("STOREOPTIONS: ", storeOptions);
      
        const storeName = storeOptions.storeName;
        const storeType = storeOptions.storeType;
        const fileLocation = storeOptions?.storeDir;
    
        return storeType ==='File' ? "File Type" : "Other Than File Type"
         
      }
}