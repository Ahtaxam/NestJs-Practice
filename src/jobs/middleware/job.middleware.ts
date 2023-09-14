import { NestMiddleware, NestModule, Optional } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function loggeer(req:Request, res:Response, next:NextFunction) {

    console.log("Loggeer...", req.headers['auth-header']);
    
    next()
    
}

export class AuthenticateOptions {
    accepted:string[]
}


export class AuthenticateUser implements NestMiddleware{
    constructor(@Optional() private options:AuthenticateOptions){
        console.log("options: ", this.options);
        
    }
    use(req: any, res: any, next: (error?: any) => void) {
        console.log(this.options, " is ");
        
        console.log("Authenticating....");
        next()
        
    }
}