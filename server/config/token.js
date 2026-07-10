import jwt from "jsonwebtoken"
import { env } from "../config/env.js";
const genToken = async (userId) => {
    try {
        const token = jwt.sign({userId} , env.JWT_SECRET , {expiresIn:"7d"})
return token
    } catch (error) {
        console.log(error)
    }

}

export default genToken