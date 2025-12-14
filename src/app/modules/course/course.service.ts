import type { ICourse, ILesson } from "./course.interface.js"
import { Course, Lesson } from "./course.model.js"
import { Enrollment } from "../enrollment/enrollment.model.js"
import { PaymentStatus } from "../enrollment/enrollment.interface.js"
import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";

const createCourse = async (payload: ICourse, instructorId: string) => {
    const courseData = {
        ...payload,
        createdBy: instructorId
    }
    const course = await Course.create(courseData)
    return course

}

const getAllCourses = async () => {

    const courses = await Course.find().populate("syllabus")
    return courses

}

const getInstructorCourses = async (instructorId: string) => {
    const courses = await Course.find({ createdBy: instructorId }).populate("syllabus");
    return courses;
}


const getMyCourses = async (userId: string) => {

    const enrollments = await Enrollment.find({
        studentId: userId,
        paymentStatus: PaymentStatus.PAID,
    })
        .populate({
            path: "courseId",
            model: Course,
            select: "title description price thumbnail instructor",
            populate: {
                path: "instructor",
                select: "name email picture",
            },
        })
        .exec();

    // Extract course objects only
    const courses = enrollments
        .map((enrollment) => enrollment.courseId)
        .filter(Boolean);

    return courses;
}


const getCourseById = async (courseId: string) => {

    const course = await Course.find({ _id: courseId }).populate("syllabus")
    return course

}


const updateCourse = async (courseId: string, instructorId: string, payload: Partial<ICourse>) => {
    const course = await Course.findById(courseId)
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found")
    }

    if (course.createdBy.toString() !== instructorId) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "You can only update your own courses")
    }

    const updated = await Course.findByIdAndUpdate(courseId, payload, { new: true }).populate("syllabus")
    return updated
}











export const courseServices = {
    getAllCourses,
    createCourse,
    getCourseById,
    getInstructorCourses,
    getMyCourses,
    updateCourse
}