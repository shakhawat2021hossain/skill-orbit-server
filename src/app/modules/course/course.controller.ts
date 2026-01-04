import type { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync.js"
import { sendResponse } from "../../utils/sendResponse.js"
import { StatusCodes } from "http-status-codes"
import { courseServices } from "./course.service.js"
import type { JwtPayload } from "jsonwebtoken"
import { paginate, type IOtherParams } from "../../utils/pagination.js"
import { Category } from "./course.interface.js"

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
    const {
        // page = 1,
        // limit = 10,
        // sortBy = "createdAt",
        // sortOrder = "asc",
        search = "",
        category
    } = req.query;


    const queryParams = paginate(req.query)

    const otherParams: IOtherParams = {
        searchTerm: String(search)
    };

    if (Object.values(Category).includes(category as Category)) {
        otherParams.category = category as Category;
    }

    const { courses, meta } = await courseServices.getAllCourses(queryParams, otherParams)

    sendResponse(res, {
        data: courses,
        meta,
        success: true,
        message: "Retrieved all courses successfully!",
        statusCode: StatusCodes.OK
    })
})

const getPublicCourseDetails = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getPublicCourseDetails(req.params?.courseId as string)

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

const getInstructorCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getInstructorCourses(req.user as JwtPayload)

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses of the instructor!",
        statusCode: StatusCodes.OK
    })
})


const getAdminCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getAdminCourses()

    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses for admin!",
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



const adminToggleDeleteCourse = catchAsync(async (req: Request, res: Response) => {
    const courseId = req.params.courseId as string;
    const result = await courseServices.adminToggleDeleteCourse(courseId);

    sendResponse(res, {
        data: { isDeleted: result.course.isDeleted },
        success: true,
        message: result.message,
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
    getCourseById,
    getPublicCourseDetails,
    getInstructorCourses,
    getAdminCourses,
    getMyCourses,
    updateCourse,
    adminToggleDeleteCourse
}