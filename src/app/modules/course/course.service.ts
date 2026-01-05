import type { ICourse } from "./course.interface.js"
import { Course } from "./course.model.js"
import { Enrollment } from "../enrollment/enrollment.model.js"
import { PaymentStatus } from "../enrollment/enrollment.interface.js"
import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";
import type { JwtPayload } from "jsonwebtoken";
import type { IOtherParams, IPaginateOp } from "../../utils/pagination.js";

const createCourse = async (payload: ICourse, instructorId: string) => {
    const courseData = {
        ...payload,
        createdBy: instructorId
    }
    const course = await Course.create(courseData)
    return course

}

const getAllCourses = async ({ page, limit, sortBy, sortOrder }: IPaginateOp, otherParams: IOtherParams) => {

    const skip = (page - 1) * limit;
    const { category, searchTerm } = otherParams;

    const filter: Record<string, any> = { isPublished: true, isDeleted: false };

    if (category) filter.category = category;

    if (searchTerm && String(searchTerm).trim()) {
        const regex = { $regex: String(searchTerm).trim(), $options: "i" };
        filter.$or = [{ title: regex }, { description: regex }, { tags: regex }];
    }

    const total = await Course.countDocuments(filter);

    const sort: Record<string, 1 | -1> = {
        [sortBy]: sortOrder as 1 | -1
    }

    const courses = await Course.find(filter)
        .populate("syllabus")
        .select('-resources')
        .sort(sort)
        .skip(skip)
        .limit(limit);

    const meta = { page, limit, total };

    return { courses, meta };

}

const getCourseById = async (courseId: string) => {

    const course = await Course.find({ _id: courseId }).populate("syllabus")
    return course

}
const getPublicCourseDetails = async (courseId: string) => {
    const course = await Course.findById(courseId)
        .select(
            "title description thumbnail price category totalDuration isPublished rating instructor introVideo tags isDeleted syllabus"
        )
        .populate({
            path: "syllabus",
            select: "title duration",
        })
        .lean();

    return course;
};


const getInstructorCourses = async (decodedToken: JwtPayload) => {
    // console.log(decodedToken)
    const courses = await Course.find({ createdBy: decodedToken.userId }).populate("syllabus");
    return courses;
}


const getAdminCourses = async () => {
    // console.log(decodedToken)
    const courses = await Course.find().populate("syllabus");
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








const adminToggleDeleteCourse = async (courseId: string) => {
    const course = await Course.findById(courseId);
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
    }

    console.log("delete1", course.isDeleted)
    // const newFlag = typeof flag === 'boolean' ? flag : !course.isDeleted;

    course.isDeleted = !course.isDeleted;
    await course.save();

    console.log("delete2", course.isDeleted)

    const message = course.isDeleted ? 'Course marked as deleted' : 'Course restored';
    // const message = 'Course marked as deleted';
    return { message, course };
}

// append to exported services
export const courseServices = {
    getAllCourses,
    getPublicCourseDetails,
    getInstructorCourses,
    getAdminCourses,
    createCourse,
    getCourseById,
    getMyCourses,
    updateCourse,
    adminToggleDeleteCourse,
}