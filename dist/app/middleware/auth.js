import { verifyToken } from "../utils/jwt.js";
import { envVars } from "../config/envVars.js";
import AppError from "../utils/appError.js";
import { StatusCodes } from "http-status-codes";
export const auth = (...authRoles) => async (req, res, next) => {
    try {
        console.log(authRoles);
        const token = req.cookies.accessToken || req.headers.authorization;
        console.log("token in checkauth", token);
        if (!token) {
            throw new AppError(StatusCodes.NOT_FOUND, "No access token found!");
        }
        // here must be use await, either if block will be true
        const isVerified = await verifyToken(token, envVars.ACCESS_TOKEN_SECRET);
        console.log(isVerified);
        if (!authRoles.includes(isVerified.role)) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "You are not permitted for accessing the route!");
        }
        // console.log(isVerified);
        req.user = isVerified;
        next();
    }
    catch (error) {
        // console.log(error);
        next(error);
    }
};
//# sourceMappingURL=auth.js.map