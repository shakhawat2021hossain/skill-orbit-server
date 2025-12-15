import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { StatusCodes } from "http-status-codes";
import { enrollmentServices } from "./enrollment.service.js";
const enroll = catchAsync(async (req, res) => {
    // console.log(req.user)
    const result = await enrollmentServices.enroll(req.params.courseId, req.user?.userId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Created payment session fot the course successfully!",
        statusCode: StatusCodes.OK
    });
});
const updateProgress = catchAsync(async (req, res) => {
    // console.log(req.user)
    const result = await enrollmentServices.updateProgress(req.params.courseId, req.user?.userId, req.params.lessonId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Updated progress successfully!",
        statusCode: StatusCodes.OK
    });
});
const getEnrolledCourse = catchAsync(async (req, res) => {
    console.log("hitted");
    const result = await enrollmentServices.getEnrolledCourse(req.params.courseId, req.user?.userId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Updated progress successfully!",
        statusCode: StatusCodes.OK
    });
});
export const enrollmentControllers = {
    enroll,
    updateProgress,
    getEnrolledCourse
};
//# sourceMappingURL=enrollment.controller.js.map