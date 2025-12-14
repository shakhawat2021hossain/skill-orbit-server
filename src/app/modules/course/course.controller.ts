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




const getAllCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getAllCourses()

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses successfully!",
        statusCode: StatusCodes.OK
    })
})

const getInstructorCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getInstructorCourses(req.user?.userId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses of the instructor!",
        statusCode: StatusCodes.OK
    })
})


const getMyCourses = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?.userId as string
    const role = req.user?.role as string
    const result = await courseServices.getMyCourses(userId)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved my courses successfully!",
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


const updateCourse = catchAsync(async (req: Request, res: Response) => {
    const courseId = req.params.courseId as string
    const instructorId = req.user?.userId as string
    const result = await courseServices.updateCourse(courseId, instructorId, req.body)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Course updated successfully!",
        statusCode: StatusCodes.OK
    })
})



export const courseControllers = {
    createCourse,
    getAllCourses,
    getInstructorCourses,
    getCourseById,
    getMyCourses,
    updateCourse
}