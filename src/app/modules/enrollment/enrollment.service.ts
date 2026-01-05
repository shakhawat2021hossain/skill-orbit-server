import mongoose from "mongoose"
import AppError from "../../utils/appError.js"
import { User } from "../auth/auth.model.js"
import { Course } from "../course/course.model.js"
import { Enrollment } from "./enrollment.model.js"
import { StatusCodes } from "http-status-codes"
import { stripe } from "../../utils/stripe.js"
import { envVars } from "../../config/envVars.js"
import type { IPaginateOp } from "../../utils/pagination.js"

const enroll = async (courseId: string, userId: string) => {
    const student = await User.findById(userId);
    if (!student) {
        throw new AppError(StatusCodes.NOT_FOUND, "Student not found!");
    }

    const course = await Course.findById(courseId);
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found!");
    }

    await Enrollment.create({
        studentId: userId,
        courseId,
        amountPaid: course.price
    })

    await User.findByIdAndUpdate(
        userId,
        { $addToSet: { enrolledCourses: courseId } }
    );


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        customer_email: student.email,
        line_items: [
            {
                price_data: {
                    currency: "bdt",
                    product_data: {
                        name: `Course: ${course.title}`,
                    },
                    unit_amount: Math.floor(course.price) * 100,
                },
                quantity: 1,
            },
        ],
        metadata: {
            courseId,
            studentId: userId,
        },
        success_url: `${envVars.FRONTEND_LIVE_URL}/dashboard/my-course`,
        cancel_url: `${envVars.FRONTEND_LIVE_URL}`,
    });

    return { session };
};

const updateProgress = async (courseId: string, studentId: string, lessonId: string) => {
    const enrollment = await Enrollment.findOne({ studentId, courseId });
    if (!enrollment) {
        throw new AppError(StatusCodes.NOT_FOUND, "Enrollment not found");
    }
    // console.log("progress")

    const lessonObjectId = new mongoose.Types.ObjectId(lessonId);
    if (enrollment.completedLessons.includes(lessonObjectId)) {
        return enrollment;
    }

    enrollment.completedLessons.push(lessonObjectId);

    const course = await Course.findById(courseId).populate("syllabus");
    if (!course) throw new Error("Course not found");

    const totalLessons = course.syllabus?.length || 0;

    enrollment.progress = totalLessons > 0
        ? Math.floor((enrollment.completedLessons.length / totalLessons) * 100)
        : 0;

    await enrollment.save();

    return enrollment;



}


const getEnrolledCourse = async (courseId: string, userId: string) => {

    const course = await Course.findById(courseId).populate("syllabus");
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found!");
    }

    const enrollment = await Enrollment.findOne({ courseId, studentId: userId })
        .populate({
            path: "courseId",
            model: Course,
            populate: { path: "syllabus" },
        })
        .exec();

    if (!enrollment) {
        throw new AppError(StatusCodes.NOT_FOUND, "Enrollment not found for this student and course");
    }

    return { enrollment, course };
}


const getEnrollmentsOfInstructor = async (
    instructorId: string,
    { page, limit, skip, sortBy, sortOrder }: IPaginateOp
) => {
    const instructorObjectId = new mongoose.Types.ObjectId(instructorId);

    const pipeline: any[] = [
        {
            $lookup: {
                from: "courses",
                localField: "courseId",
                foreignField: "_id",
                as: "course",
            },
        },
        { $unwind: "$course" },

        {
            $match: {
                "course.createdBy": instructorObjectId,
            },
        },

        {
            $lookup: {
                from: "users",
                localField: "studentId",
                foreignField: "_id",
                as: "student",
            },
        },
        { $unwind: "$student" },

        { $sort: { [sortBy]: sortOrder } },

        {
            $facet: {
                metadata: [{ $count: "total" }],
                data: [
                    { $skip: skip },
                    { $limit: limit },
                    {
                        $project: {
                            studentId: 1,
                            courseId: 1,
                            paymentStatus: 1,
                            amountPaid: 1,
                            progress: 1,
                            _id: 0,
                        },
                    },
                ],
            },
        },
    ];

    const agg = await Enrollment.aggregate(pipeline);

    const total = agg[0]?.metadata[0]?.total || 0;
    const enrollments = agg[0]?.data || [];

    const meta = { page, limit, total };

    return { enrollments, meta };
};

export const enrollmentServices = {
    enroll,
    updateProgress,
    getEnrolledCourse,
    getEnrollmentsOfInstructor
}