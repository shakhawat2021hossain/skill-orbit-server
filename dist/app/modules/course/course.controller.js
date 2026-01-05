import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { StatusCodes } from "http-status-codes";
import { courseServices } from "./course.service.js";
import { paginate } from "../../utils/pagination.js";
import { Category } from "./course.interface.js";
const createCourse = catchAsync(async (req, res) => {
    // console.log(req.user)
    const result = await courseServices.createCourse(req.body, req.user?.userId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "course created successfully!",
        statusCode: StatusCodes.CREATED
    });
});
const getAllCourses = catchAsync(async (req, res) => {
    const { 
    // page = 1,
    // limit = 10,
    // sortBy = "createdAt",
    // sortOrder = "asc",
    search = "", category } = req.query;
    const queryParams = paginate(req.query);
    const otherParams = {
        searchTerm: String(search)
    };
    if (Object.values(Category).includes(category)) {
        otherParams.category = category;
    }
    const { courses, meta } = await courseServices.getAllCourses(queryParams, otherParams);
    sendResponse(res, {
        data: courses,
        meta,
        success: true,
        message: "Retrieved all courses successfully!",
        statusCode: StatusCodes.OK
    });
});
const getPublicCourseDetails = catchAsync(async (req, res) => {
    const result = await courseServices.getPublicCourseDetails(req.params?.courseId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses successfully!",
        statusCode: StatusCodes.OK
    });
});
const getCourseById = catchAsync(async (req, res) => {
    const result = await courseServices.getCourseById(req.params?.courseId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved course successfully!",
        statusCode: StatusCodes.OK
    });
});
const getInstructorCourses = catchAsync(async (req, res) => {
    const result = await courseServices.getInstructorCourses(req.user);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses of the instructor!",
        statusCode: StatusCodes.OK
    });
});
const getAdminCourses = catchAsync(async (req, res) => {
    const result = await courseServices.getAdminCourses();
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved all courses for admin!",
        statusCode: StatusCodes.OK
    });
});
const getMyCourses = catchAsync(async (req, res) => {
    const userId = req.user?.userId;
    const role = req.user?.role;
    const result = await courseServices.getMyCourses(userId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved my courses successfully!",
        statusCode: StatusCodes.OK
    });
});
const adminToggleDeleteCourse = catchAsync(async (req, res) => {
    const courseId = req.params.courseId;
    const result = await courseServices.adminToggleDeleteCourse(courseId);
    sendResponse(res, {
        data: { isDeleted: result.course.isDeleted },
        success: true,
        message: result.message,
        statusCode: StatusCodes.OK
    });
});
const updateCourse = catchAsync(async (req, res) => {
    const courseId = req.params.courseId;
    const instructorId = req.user?.userId;
    const result = await courseServices.updateCourse(courseId, instructorId, req.body);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Course updated successfully!",
        statusCode: StatusCodes.OK
    });
});
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
};
//# sourceMappingURL=course.controller.js.map