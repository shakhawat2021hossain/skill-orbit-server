import type { JwtPayload } from "jsonwebtoken"
import { Role } from "../auth/auth.interface.js"
import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";
import { User } from "../auth/auth.model.js";

import { Course } from "../course/course.model.js";
import { Enrollment } from "../enrollment/enrollment.model.js";
import { PaymentStatus } from "../enrollment/enrollment.interface.js";

const getAdminMetaData = async () => {
    const [
        totalUsers,
        blockedUsers,
        totalCourses,
        publishedCourses,
        totalEnrollments,
        paidEnrollments
    ] = await Promise.all([
        User.countDocuments(),
        User.countDocuments({ isBlocked: true }),
        Course.countDocuments({ isDeleted: { $ne: true } }),
        Course.countDocuments({ isPublished: true }),
        Enrollment.countDocuments(),
        Enrollment.find({ paymentStatus: PaymentStatus.PAID })
    ]);

    const totalRevenue = paidEnrollments.reduce(
        (sum, enroll) => sum + (enroll.amountPaid || 0),
        0
    );

    return {
        users: {
            total: totalUsers,
            blocked: blockedUsers,
        },
        courses: {
            total: totalCourses,
            published: publishedCourses,
            unpublished: totalCourses - publishedCourses,
        },
        enrollments: {
            total: totalEnrollments,
        },
        finance: {
            totalRevenue,
        },
    };
};
const getInstructorMetaData = async (instructorId: string) => {
    const courses = await Course.find({
        createdBy: instructorId,
        isDeleted: { $ne: true },
    })

    console.log("ins cou", courses)
    const courseIds = courses.map(course => course._id);

    const paidEnrollments = await Enrollment.find({
        courseId: { $in: courseIds },
        paymentStatus: PaymentStatus.PAID,
    });
    // console.log("paidenr", paidEnrollments)

    const totalIncome = paidEnrollments.reduce(
        (sum, enroll) => sum + (enroll.amountPaid || 0),
        0
    );

    let totalRatingScore = 0;
    let totalRatingCount = 0;

    courses.forEach(course => {
        const count = course.rating?.count || 0;
        const avg = course.rating?.average || 0;

        totalRatingScore += avg * count;
        totalRatingCount += count;
    });

    const totalAverageRating =
        totalRatingCount === 0
            ? 0
            : Number((totalRatingScore / totalRatingCount).toFixed(1));


    return {
        courses: {
            total: courses.length,
            published: courses.filter(c => c.isPublished).length,
            draft: courses.filter(c => !c.isPublished).length,
        },
        students: paidEnrollments.length,
        income: {
            total: totalIncome,
        },
        rating: {
            average: totalAverageRating,
            totalReviews: totalRatingCount,
        },

    };
};


const getStudentMetaData = async (studentId: string) => {
    const enrollments = await Enrollment.find({
        studentId,
        paymentStatus: PaymentStatus.PAID,
    });

    const completedCourses = enrollments.filter(
        enroll => enroll.progress === 100
    ).length;

    const totalSpent = enrollments.reduce(
        (sum, enroll) => sum + (enroll.amountPaid || 0),
        0
    );

    const student = await User.findById(studentId).select("wishlist");

    return {
        courses: {
            enrolled: enrollments.length,
            completed: completedCourses,
            wishlist: student?.wishlist?.length || 0,
        },
        finance: {
            totalSpent,
        },
    };
};

const userMetaData = async (user: JwtPayload) => {
    if (!user?.userId || !user?.role) {
        throw new AppError(401, "Invalid token");
    }

    switch (user.role) {
        case Role.ADMIN:
            return await getAdminMetaData();

        case Role.INSTRUCTOR:
            return await getInstructorMetaData(user.userId);

        case Role.STUDENT:
            return await getStudentMetaData(user.userId);

        default:
            throw new AppError(403, "Unauthorized");
    }
};

export const metadataServices = {
    userMetaData,
};
