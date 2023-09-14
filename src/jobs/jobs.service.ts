import { Inject, Injectable } from "@nestjs/common";
// import { ConfigService } from "src/config/config.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JobsService{
    constructor(
        // private config: ConfigService,
        private readonly configService : ConfigService,
    @Inject('JOBS-Store') private cacheJobs:any,
        ){
        console.log("JobsModule",this.cacheJobs);
        const name = this.configService.get<string>("APP_NAME");
        const email = this.configService.get('APP_EMAIL.SUPPORT_EMAIL');

        const user = this.configService.get('Database.USER');
        const password = this.configService.get<string>("Database.PASSWORD")

        console.log(name, email, user, password);
        
        
        
        
    }
}