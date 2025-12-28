import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";
import { Review } from "./review.model.js";
import { Course } from "../course/course.model.js";
import { Enrollment } from "../enrollment/enrollment.model.js";
import { PaymentStatus } from "../enrollment/enrollment.interface.js";
import type { Types } from "mongoose";
import type { IReview } from "./review.interface.js";
import { User } from "../auth/auth.model.js";

const postReview = async (payload: IReview, userId: string) => {

    const {courseId, rating, review } = payload
    // validate course exists
    const course = await Course.findById(courseId);
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
    }

    const user = await User.findById(userId)
    console.log(user)

    // ensure student is enrolled and paid for the course
    const enrollment = await Enrollment.findOne({ studentId: userId, courseId, paymentStatus: PaymentStatus.PAID });
    if (!enrollment) {
        throw new AppError(StatusCodes.FORBIDDEN, "Only enrolled students can post reviews for this course");
    }

    // check if student already reviewed the course
    const existingReview = await Review.findOne({ studentId: userId, courseId });

    if (!existingReview) {
        // create new review
        const newReview = await Review.create({ studentId: userId, courseId, rating, review: review || "", reviewer: user?.name as string });

        // update course rating
        const oldCount = course.rating?.count ?? 0;
        const oldAvg = course.rating?.average ?? 0;
        const newCount = oldCount + 1;
        const newAvg = ((oldAvg * oldCount) + rating) / newCount;

        course.rating = { count: newCount, average: Number(newAvg.toFixed(2)) } as any;
        await course.save();

        return newReview;
    }
    else {
        // update existing review
        const oldRating = existingReview.rating;
        existingReview.rating = rating;
        existingReview.review = review || existingReview.review || "";
        existingReview.isEdited = true;
        await existingReview.save();

        // adjust course average
        const count = course.rating?.count ?? 1; // at least 1
        const oldAvg = course.rating?.average ?? oldRating;
        const total = (oldAvg * count) - oldRating + rating;
        const newAvg = total / count;
        course.rating = { count, average: Number(newAvg.toFixed(2)) } as any;
        await course.save();

        return existingReview;
    }
}

const getReviews = async (courseId: string) => {
    // validate course exists
    const course = await Course.findById(courseId);
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
    }

    // fetch reviews for the course, newest first, include reviewer basic info
    const reviews = await Review.find({ courseId })
        .sort({ createdAt: -1 })
        .populate({ path: "studentId", select: "name picture" })
        .exec();

    return reviews;
}


export const reviewServices = {
    postReview,
    getReviews
}