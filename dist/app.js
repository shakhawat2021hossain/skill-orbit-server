import express, {} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound.js";
import globalErrorHandler from "./app/middleware/globalErrorHandler.js";
import { router } from "./app/routes/index.js";
import { paymentControllers } from "./app/modules/payment/payment.controller.js";
import { envVars } from "./app/config/envVars.js";
const app = express();
app.post("/webhook", express.raw({ type: "application/json" }), paymentControllers.handleWebhookEvent);
app.use(express.json());
app.use(cors({
    origin: ["https://skill-orbit-client.vercel.app"],
    credentials: true
}));
// 'http://localhost:5173', envVars.FRONTEND_URL, 
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("trust proxy", 1);
app.get('/', async (req, res) => {
    res.json({
        message: "Hello from Server"
    });
});
app.use('/api', router);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
//# sourceMappingURL=app.js.map