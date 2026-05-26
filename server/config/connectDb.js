import mongoose from "mongoose";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { family: 4 })
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
    }
}

export default connectDb