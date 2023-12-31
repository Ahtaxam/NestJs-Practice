import { ArgumentMetadata, BadRequestException, Inject, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform{

    constructor(
        private schema:ObjectSchema,
        ) {        
            
    }
    transform(value: any, metadata: ArgumentMetadata) {        
        
    const {error} = this.schema.validate(value);
    
    if(error){
        console.log(error) ;
        
        throw new BadRequestException({
            error:"Validation Failed",
            message:error.message
        })
    }
        return value;
    }
}