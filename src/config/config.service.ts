import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
    constructor(@Inject('CONFIG_OPTIONS') private options:any){
        // console.log("Config_Service: ", this.options);
    }

    printHello(){
        return "Hello From Config Controller"
    }
}