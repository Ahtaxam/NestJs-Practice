import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Controller('config')
export class ConfigController{
    constructor(private service:ConfigService){
        // console.log("Config Controller");
    }


   @Get()
   findAll(){
    return this.service.printHello()
   }

    
}