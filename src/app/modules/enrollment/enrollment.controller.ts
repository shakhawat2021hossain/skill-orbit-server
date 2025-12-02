import type { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync.js"
import { sendResponse } from "../../utils/sendResponse.js"
import { StatusCodes } from "http-status-codes"
import { enrollmentServices } from "./enrollment.service.js"


const enroll = catchAsync(async (req: Request, res: Response) => {
    // console.log(req.user)

    const result = await enrollmentServices.enroll(req.params.courseId as string, req.user?.userId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved course successfully!",
        statusCode: StatusCodes.OK
    })
})



export const enrollmentControllers = {
    
    enroll
}