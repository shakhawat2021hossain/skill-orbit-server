import mongoose from "mongoose"
import AppError from "../../utils/appError.js"
import { User } from "../auth/auth.model.js"
import { Course } from "../course/course.model.js"
import { Enrollment } from "./enrollment.model.js"
import { StatusCodes } from "http-status-codes"
import { stripe } from "../../utils/stripe.js"

const enroll = async (courseId: string, userId: string) => {
    const student =  await User.findById(userId)
    if(!student){
        throw new AppError(StatusCodes.NOT_FOUND, "Student not Found!")
    }

    const course =  await Course.findById(courseId)
    if(!course){
        throw new AppError(StatusCodes.NOT_FOUND, "Course not Found!")
    }



    const enrollment = await Enrollment.create({
        studentId: userId,
        courseId
    })


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
            courseId: courseId,
            // paymentId: payment.id
        },
        success_url: `https://www.programming-hero.com/`,
        cancel_url: `https://next.programming-hero.com/`,
    });

    await Course.findByIdAndUpdate(
        courseId,
        { $addToSet: { students: userId } },
        { new: true }
    )

    return {enrollment, session}

}

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

export const enrollmentServices = {
    enroll,
    updateProgress
}