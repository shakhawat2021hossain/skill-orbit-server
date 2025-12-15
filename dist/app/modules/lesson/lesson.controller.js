import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse.js";
import { lessonServices } from "./lesson.service.js";
import catchAsync from "../../utils/catchAsync.js";
const createLesson = catchAsync(async (req, res) => {
    const result = await lessonServices.createLesson(req.body, req.params.courseId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson created successfully!",
        statusCode: StatusCodes.CREATED
    });
});
const deleteLesson = catchAsync(async (req, res) => {
    const { courseId, lessonId } = req.params;
    const instructorId = req.user?.userId;
    const result = await lessonServices.deleteLesson(lessonId, courseId, instructorId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson deleted successfully!",
        statusCode: StatusCodes.OK
    });
});
const updateLesson = catchAsync(async (req, res) => {
    const { courseId, lessonId } = req.params;
    const instructorId = req.user?.userId;
    const result = await lessonServices.updateLesson(lessonId, courseId, instructorId, req.body);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Lesson updated successfully!",
        statusCode: StatusCodes.OK
    });
});
export const lessonControllers = {
    createLesson,
    deleteLesson,
    updateLesson
};
//# sourceMappingURL=lesson.controller.js.map