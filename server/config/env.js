import dotenv from "dotenv";
import { cleanEnv, str, port } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
  PORT: port(),
  MONGODB_URL: str(),
  JWT_SECRET: str(),
  OPENROUTER_API_KEY: str(),
  RAZORPAY_KEY_ID: str(),
  RAZORPAY_KEY_SECRET: str(),

});