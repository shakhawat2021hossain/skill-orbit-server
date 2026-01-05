import dotenv from "dotenv";
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export const envVars = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    FORGOT_PASS_TOKEN_SECRET: process.env.FORGOT_PASS_TOKEN_SECRET,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASS: process.env.ADMIN_PASS,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    FRONTEND_URL: process.env.FRONTEND_URL,
    FRONTEND_LIVE_URL: process.env.FRONTEND_LIVE_URL,
    EMAIL_SENDER: {
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        SMTP_FROM: process.env.SMTP_FROM,
    },
};
//# sourceMappingURL=envVars.js.map