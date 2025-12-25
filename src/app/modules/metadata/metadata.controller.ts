import { type Request, type Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { StatusCodes } from "http-status-codes"
import { metadataServices } from "./metadata.service.js";
import type { JwtPayload } from "jsonwebtoken";


const userMetaData = catchAsync(async (req: Request, res: Response) => {
    const result = await metadataServices.userMetaData(req.user as JwtPayload)
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retreived MetaData successfully!",
        statusCode: StatusCodes.OK
    })
})



export const metadataControllers = {
    userMetaData
}

