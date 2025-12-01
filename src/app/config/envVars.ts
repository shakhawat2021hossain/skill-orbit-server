import dotenv from "dotenv"
import path from 'path';


dotenv.config({ path: path.join(process.cwd(), '.env') });


export const envVars = {
    MONGO_URI: process.env.MONGO_URI as string,
    PORT: process.env.PORT

}