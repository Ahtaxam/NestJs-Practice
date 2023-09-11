import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { ConfigModule } from "src/config/config.module";
import { CacheStoreModule } from "src/cache-store/cachestore.module";
import { JobsController } from "./jobs.controller";

@Module({
    imports:[ConfigModule, CacheStoreModule.forFeature('jobs')],
    providers:[JobsService],
    controllers:[JobsController]

})
export class JobsModule{}