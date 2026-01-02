import { type Request, type Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { authServices } from "./auth.service.js";
import { StatusCodes } from "http-status-codes"


const register = catchAsync(async (req: Request, res: Response) => {
    const result = await authServices.register(req.body)
    sendResponse(res, {
        data: result,
        success: true,
        message: "created user successfully!",
        statusCode: StatusCodes.CREATED
    })
})

const credentialLogin = catchAsync(async (req: Request, res: Response) => {
    const result = await authServices.credentialLogin(req.body)

    res.cookie("accessToken", result.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    sendResponse(res, {
        data: result,
        success: true,
        message: "Login user successfully!",
        statusCode: StatusCodes.OK
    })
})


const logout = catchAsync(async (req: Request, res: Response) => {

    // Clear the access token cookie
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    })

    sendResponse(res, {
        data: null,
        success: true,
        message: "Logout successful!",
        statusCode: StatusCodes.OK
    })
})


const forgotPassword = catchAsync(async (req: Request, res: Response) => {
    const { email } = req.body
    const result = await authServices.forgotPassword(email)

    sendResponse(res, {
        data: result,
        success: true,
        message: "A reset link send to your email successfully!",
        statusCode: StatusCodes.ACCEPTED
    })
})


const resetPassword = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization || "";

    await authServices.resetPassword(token, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Password Reset successfully!",
        data: null,
    });
});



export const authControllers = {
    register,
    credentialLogin,
    logout,
    forgotPassword,
    resetPassword
}

