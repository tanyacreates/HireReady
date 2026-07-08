import genToken from "../config/token.js"
import User from "../models/user.model.js"

const isProd = process.env.NODE_ENV === "production"

// In production the frontend (Vercel) and backend are on different domains,
// so the cookie must be SameSite=None + Secure to be sent cross-site.
// In local dev (same site, plain http) Strict + non-secure is correct.
export const cookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "strict",
}

export const googleAuth = async (req,res) => {
    try {
        const {name , email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name , 
                email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token" , token , {
            ...cookieOptions,
            maxAge:7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)



    } catch (error) {
        return res.status(500).json({message:`Google auth error ${error}`})
    }
    
}

export const logOut = async (req,res) => {
    try {
        res.clearCookie("token", cookieOptions)
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
         return res.status(500).json({message:`Logout error ${error}`})
    }
    
}