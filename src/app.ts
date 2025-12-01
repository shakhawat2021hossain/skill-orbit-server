import express, { type Request, type Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

// middleware
app.use(cookieParser())
app.set("trust proxy", 1);

app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true
    })
);
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    res.json({
        message: "Hello from Server"
    })
})

export default app;