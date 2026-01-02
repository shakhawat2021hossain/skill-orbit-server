import {} from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { authServices } from "./auth.service.js";
import { StatusCodes } from "http-status-codes";
const register = catchAsync(async (req, res) => {
    const result = await authServices.register(req.body);
    sendResponse(res, {
        data: result,
        success: true,
        message: "created user successfully!",
        statusCode: StatusCodes.CREATED
    });
});
const credentialLogin = catchAsync(async (req, res) => {
    const result = await authServices.credentialLogin(req.body);
    // res.cookie("accessToken", result.accessToken, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //     maxAge: 7 * 24 * 60 * 60 * 1000
    // })
    sendResponse(res, {
        data: result,
        success: true,
        message: "Login user successfully!",
        statusCode: StatusCodes.OK
    });
});
const logout = catchAsync(async (req, res) => {
    // Clear the access token cookie
    // res.clearCookie("accessToken", {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    // })
    sendResponse(res, {
        data: null,
        success: true,
        message: "Logout successful!",
        statusCode: StatusCodes.OK
    });
});
export const authControllers = {
    register,
    credentialLogin,
    logout
};
//# sourceMappingURL=auth.controller.js.map