export const APP_CONFIG = () => {
    return {
        APP_NAME:process.env["APP_NAME"],
        APP_URL:process.env['APP_URL'],
        APP_EMAIL:{
            SUPPORT_EMAIL:process.env['SUPPORT_EMAIL']
        }
    }
};