import { registerAs } from "@nestjs/config";

export const DATABASE_CONFIG = registerAs('Database' , () => {
    return {
        USER:process.env['DATABASE_USERNAME'],
        PASSWORD:process.env["DATABASE_PASSWORD"],
        NAME:process.env["DATABASE_NAME"]
    }
})