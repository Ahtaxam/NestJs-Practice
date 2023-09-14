import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { JobsService } from "./jobs.service";
// import { ConfigModule } from "src/config/config.module";
import { CacheStoreModule } from "src/cache-store/cachestore.module";
import { JobsController } from "./jobs.controller";
import { AuthenticateOptions, AuthenticateUser, loggeer } from "./middleware/job.middleware";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports:[CacheStoreModule.forFeature('jobs'),
    // ConfigModule
    ConfigModule
],
    providers:[JobsService, {
        provide:AuthenticateOptions,
        useValue:["JWT", "PASSWORD"]
    }],
    controllers:[JobsController]

})
export class JobsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthenticateUser).forRoutes('job')
    }
}