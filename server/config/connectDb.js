import mongoose from "mongoose";
import dns from "dns";
import { env } from "../config/env.js";
dns.setDefaultResultOrder("ipv4first");

const connectDb = async () => {
    try {
        await mongoose.connect(env.MONGODB_URL, { family: 4 })
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
    }
}

export default connectDb