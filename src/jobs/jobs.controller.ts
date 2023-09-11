import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { CreateJobDto } from "./dto/createjob.dto";
import { JoiValidationPipe } from "./job.pipe";
import { createJobSchema } from "./job.schema";

@Controller("job")
export class JobsController{

@Post()
postJob(@Body(new JoiValidationPipe(createJobSchema)) createJob:CreateJobDto){
    console.log("Create: ", createJob);
    
    return "Job Posted"
}

}