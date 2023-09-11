import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class UserStore {
    constructor(@Inject('DB_NAME') private dbName:string){
        console.log("UserStore Init");
        console.log(this.dbName);
        
    }

    addUser():String{
        return "User Added"
    }
}