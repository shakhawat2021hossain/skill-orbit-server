import type { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync.js"
import { sendResponse } from "../../utils/sendResponse.js"
import { StatusCodes } from "http-status-codes"
import { enrollmentServices } from "./enrollment.service.js"
import { paginate } from "../../utils/pagination.js"



const enroll = catchAsync(async (req: Request, res: Response) => {
    // console.log(req.user)

    const result = await enrollmentServices.enroll(req.params.courseId as string, req.user?.userId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Created payment session fot the course successfully!",
        statusCode: StatusCodes.OK
    })
})

const updateProgress = catchAsync(async (req: Request, res: Response) => {
    // console.log(req.user)

    const result = await enrollmentServices.updateProgress(req.params.courseId as string, req.user?.userId as string, req.params.lessonId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Updated progress successfully!",
        statusCode: StatusCodes.OK
    })
})


const getEnrolledCourse = catchAsync(async (req: Request, res: Response) => {
    console.log("hitted")

    const result = await enrollmentServices.getEnrolledCourse(req.params.courseId as string, req.user?.userId as string)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Updated progress successfully!",
        statusCode: StatusCodes.OK
    })
})

const getInstructorEnrollments = catchAsync(async (req: Request, res: Response) => {
    const queryParams = paginate(req.query)


    const { enrollments, meta } = await enrollmentServices.getEnrollmentsOfInstructor(req.user?.userId as string, queryParams)

    sendResponse(res, {
        data: enrollments,
        meta,
        success: true,
        message: "Retrieved instructor enrollments successfully!",
        statusCode: StatusCodes.OK
    })
})

export const enrollmentControllers = {
    enroll,
    updateProgress,
    getEnrolledCourse,
    getInstructorEnrollments
}