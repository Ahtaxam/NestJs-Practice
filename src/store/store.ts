import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class Store {
    constructor(){
        console.log("Store Init");
        
        
        
    }

    addUser():String{
        return "User Added"
    }
}