import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";

@Injectable()
export class JobsService{
    constructor(private config: ConfigService,
    @Inject('JOBS-Store') private cacheJobs:any,
        ){
        console.log("JobsModule",this.cacheJobs);
        
        
    }
}