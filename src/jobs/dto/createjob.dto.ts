import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsEmail, IsIn, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";

enum JobType {
    FULL_TIME,
    PART_TIME
}

export class LocationDto {
    @IsString()
    @IsNotEmpty()
    city:string;

    @IsString()
    @IsNotEmpty()
    country:string
}

export class CreateJobDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsIn(Object.keys(JobType))
    @IsOptional()
    type?:string;

    @IsString({each:true})
    @ArrayMinSize(1)
    tags:string[];

    @IsInt()
    salary:number;

    @ValidateNested()
    @IsObject()
    @Type(() => LocationDto)
    location:LocationDto



// validate array of object
    // @ValidateNested({each:true})
    // @IsArray()
    // @Type(() => LocationDto)
    // location:LocationDto[]

}