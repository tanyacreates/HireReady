import express from "express"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"
import { env } from "./config/env.js";

const app = express()
const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL?.replace(/\/+$/, ""), // tolerate trailing slash in env var
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const PORT = env.PORT || 6000
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
