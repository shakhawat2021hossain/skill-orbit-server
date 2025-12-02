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



const createLesson = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.createLesson(req.body, req.params.courseId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson created successfully!",
        statusCode: StatusCodes.CREATED
    })
})


const getAllCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getAllCourses()

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses successfully!",
        statusCode: StatusCodes.OK
    })
})

const getCourseById = catchAsync(async (req: Request, res: Response) => {

    const result = await courseServices.getCourseById(req.params?.courseId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved course successfully!",
        statusCode: StatusCodes.OK
    })
})



export const courseControllers = {
    createCourse,
    createLesson,
    getAllCourses,
    getCourseById
}