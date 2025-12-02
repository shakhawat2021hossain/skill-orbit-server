import type { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync.js"
import { sendResponse } from "../../utils/sendResponse.js"
import { StatusCodes } from "http-status-codes"
import { courseServices } from "./course.service.js"

const createCourse = catchAsync(async (req: Request, res: Response) => {
    // console.log(req.user)
    const result = await courseServices.createCourse(req.body, req.user?.userId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "course created successfully!",
        statusCode: StatusCodes.CREATED
    })
})



const addLesson = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.addLesson(req.body)



    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson added successfully!",
        statusCode: StatusCodes.CREATED
    })
})
export const courseControllers = {
    addLesson,
    createCourse
}