import { StatusCodes } from "http-status-codes"
import { sendResponse } from "../../utils/sendResponse.js"
import type { Request, Response } from "express"
import { lessonServices } from "./lesson.service.js"
import catchAsync from "../../utils/catchAsync.js"


const createLesson = catchAsync(async (req: Request, res: Response) => {
    const result = await lessonServices.createLesson(req.body, req.params.courseId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson created successfully!",
        statusCode: StatusCodes.CREATED
    })
})

const deleteLesson = catchAsync(async (req: Request, res: Response) => {
    const { courseId, lessonId } = req.params;
    const instructorId = req.user?.userId as string;
    const result = await lessonServices.deleteLesson(lessonId as string, courseId as string, instructorId);

    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson deleted successfully!",
        statusCode: StatusCodes.OK
    })
})

const updateLesson = catchAsync(async (req: Request, res: Response) => {
    const { courseId, lessonId } = req.params;
    const instructorId = req.user?.userId as string;
    const result = await lessonServices.updateLesson(lessonId as string, courseId as string, instructorId, req.body);

    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson updated successfully!",
        statusCode: StatusCodes.OK
    })
})

export const lessonControllers = {
    createLesson,
    deleteLesson,
    updateLesson
}