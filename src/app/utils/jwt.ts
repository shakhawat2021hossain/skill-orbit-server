import jwt, { type JwtPayload } from "jsonwebtoken"
import { envVars } from "../config/envVars.js"
export const generateTokens = async (payload: JwtPayload) => {
    const jwtPayload = {
        userId: payload._id,
        email: payload.email,
        role: payload.role
    }

    const accessToken = jwt.sign(jwtPayload, envVars.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
    const refreshToken = jwt.sign(jwtPayload, envVars.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })

    return {
        accessToken,
        refreshToken
    }
}


export const verifyToken = async(token: string, secret: string) =>{
    const isVerified = jwt.verify(token, secret) as JwtPayload
    return isVerified
}