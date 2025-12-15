import mongoose from "mongoose";
import app from "./app.js";
import { envVars } from "./app/config/envVars.js";
import { adminSeed } from "./app/utils/adminSeed.js";
const port = envVars.PORT || 5000;
const startServer = async () => {
    try {
        await mongoose.connect(envVars.MONGO_URI);
        console.log('✅ Connected to MongoDB');
        app.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error("❌ Failed to start the server: ", error);
    }
};
(async () => {
    await startServer();
    await adminSeed();
})();
//# sourceMappingURL=server.js.map