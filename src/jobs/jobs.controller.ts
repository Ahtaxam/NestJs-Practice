import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseEnumPipe, ParseIntPipe, Post, Put, Req, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateJobDto } from "./dto/createjob.dto";
import { JoiValidationPipe } from "./job.pipe";
import { createJobSchema } from "./job.schema";
import { number } from "joi";
import { error } from "console";
import { LoggingInterceptor } from "./interceptors/logging.interceptors";

enum JobType {
    PART_TIME,
    FULL_TIME
}

@Controller("job")
@UseInterceptors(LoggingInterceptor)
export class JobsController{

// @Post()
// postJob(@Body(new JoiValidationPipe(createJobSchema)) createJob:CreateJobDto){
//     console.log("Create: ", createJob);
    
//     return "Job Posted"
// }


// Validate array ob Object
@Post()
postJob(@Body(new ParseArrayPipe({items:CreateJobDto}), ValidationPipe) createjobDto: CreateJobDto[]) {
    console.log("Created: ", createjobDto);
    
    return "Job Posted Successfully!"

}

// @Post()
// postJob(@Body(ValidationPipe) createjobDto: CreateJobDto) {
//     console.log("Created: ", createjobDto);
    
//     return "Job Posted Successfully!"

// }

@Get()
getJobs(@Req() req:Request){
    console.log("in controller: ");
    // throw new Error()
    
    return "Jobs"
}

@Post('/bd')
postBDJob(@Body("dept") dept:Boolean) {
    console.log(typeof dept);
    
    return `posted job ${dept}`
}

@Put('type')
postSpecificob(@Body("type", new ParseEnumPipe(JobType, {errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) type:JobType){
    return `Job Updated ${type}`
}

@Get(':id')
@UsePipes(ParseIntPipe)
getJobById(@Param("id", new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number){    
    return `Single Job ${typeof id}`
}

@Get("search/:id")
findJobById(@Param("id", new ParseArrayPipe({items:Number})) ids:number[] ){
    console.log(ids);
    return "find job"
    
}


@Get('exception/:id')
getIdException(@Param('id', ParseIntPipe) id:number){
    if(id < 0){
        throw new HttpException("Invalid Id", HttpStatus.BAD_REQUEST)
    }
    return id
}

}