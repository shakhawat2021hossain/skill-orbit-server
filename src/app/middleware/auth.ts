import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.js";
import { envVars } from "../config/envVars.js";
import AppError from "../utils/appError.js";
import type { JwtPayload } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const auth = (...authRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(authRoles);
        const token = req.cookies.accessToken;
        console.log("token in checkauth", token);
        if (!token) {
            throw new AppError(StatusCodes.NOT_FOUND, "No access token found!")
        }

        // here must be use await, either if block will be true
        const isVerified = await verifyToken(token, envVars.ACCESS_TOKEN_SECRET) as JwtPayload;
        console.log(isVerified);
        if (!authRoles.includes(isVerified.role)) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "You are not permitted for accessing the route!")
        }
        // console.log(isVerified);
        req.user = isVerified
        next()
    }
    catch (error) {
        // console.log(error);
        next(error)
    }

}