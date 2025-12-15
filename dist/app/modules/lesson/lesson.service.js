import { Course, Lesson } from "../course/course.model.js";
import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";
const createLesson = async (payload, courseId) => {
    const lesson = await Lesson.create({ ...payload, courseId });
    await Course.findByIdAndUpdate(courseId, { $push: { syllabus: lesson._id } }, { new: true });
    return lesson;
};
const deleteLesson = async (lessonId, courseId, instructorId) => {
    // Verify the course belongs to the instructor
    const course = await Course.findById(courseId);
    console.log(lessonId, "lessonid");
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
    }
    if (course.createdBy.toString() !== instructorId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized: You can only delete lessons from your own courses");
    }
    // Verify the lesson belongs to the course
    const lesson = await Lesson.findById(lessonId);
    console.log(lesson, "lesson");
    if (!lesson || lesson.courseId.toString() !== courseId) {
        throw new AppError(StatusCodes.NOT_FOUND, "Lesson not found in this course");
    }
    // Delete the lesson
    await Lesson.findByIdAndDelete(lessonId);
    // Remove lesson from course syllabus
    await Course.findByIdAndUpdate(courseId, { $pull: { syllabus: lessonId } }, { new: true });
    return { message: "Lesson deleted successfully" };
};
const updateLesson = async (lessonId, courseId, instructorId, payload) => {
    // Verify the course belongs to the instructor
    const course = await Course.findById(courseId);
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
    }
    if (course.createdBy.toString() !== instructorId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized: You can only update lessons from your own courses");
    }
    // Verify the lesson belongs to the course
    const lesson = await Lesson.findById(lessonId);
    if (!lesson || lesson.courseId.toString() !== courseId) {
        throw new AppError(StatusCodes.NOT_FOUND, "Lesson not found in this course");
    }
    // Update the lesson
    const updated = await Lesson.findByIdAndUpdate(lessonId, payload, { new: true });
    return updated;
};
export const lessonServices = {
    createLesson,
    deleteLesson,
    updateLesson
};
//# sourceMappingURL=lesson.service.js.map