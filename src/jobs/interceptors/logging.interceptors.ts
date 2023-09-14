import { CallHandler, ExecutionContext, Injectable, NestInterceptor, ServiceUnavailableException } from "@nestjs/common";
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();

        // console.log("Incoming request :", request.body);
        

        console.log("Before");
        return next.handle().pipe(
            // tap((result) => {
            //     return "From Interceptor"
                
            // }

            // this will only alter the response
            map((data) => {
                return data + " From Interceptor"
            })
            )
            // Error handler will be in pipe function
            // catchError((err) => {
            //     return throwError((err) => new ServiceUnavailableException())
            // })
        // )

        
        
    }
}