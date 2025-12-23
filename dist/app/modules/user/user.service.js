import { Role } from "../auth/auth.interface.js";
import { User } from "../auth/auth.model.js";
import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";
import { Types } from "mongoose";
import { Course } from "../course/course.model.js";
import { Enrollment } from "../enrollment/enrollment.model.js";
import { PaymentStatus } from "../enrollment/enrollment.interface.js";
const getAllUsers = async () => {
    const users = await User.find().select('-password');
    return users;
};
const getUserById = async (userId) => {
    const user = await User.findById(userId).select('-password');
    if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }
    return user;
};
const updateUser = async (userId, payload) => {
    const updated = await User.findByIdAndUpdate(userId, payload, { new: true }).select('-password');
    if (!updated) {
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }
    return updated;
};
const updateMyProfile = async (userId, payload, decodedToken) => {
    // Prevent updating sensitive or admin-managed fields
    const isExist = await User.findById(userId);
    if (!isExist) {
        throw new AppError(StatusCodes.NOT_FOUND, "User not found!");
    }
    if (payload.role) {
        if (decodedToken.role !== Role.ADMIN) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized to update role");
        }
    }
    if (payload.isBlocked || payload.isDeleted || payload.isApproved || payload.enrolledCourses || payload.enrolledCourses || payload.password) {
        if (decodedToken.role === Role.INSTRUCTOR || decodedToken.role === Role.STUDENT) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized!");
        }
    }
    const result = await User.findByIdAndUpdate(userId, payload, { returnDocument: "after", runValidators: true }).select('-password');
    return result;
    // const forbidden = [
    //   'role',
    //   'isBlocked',
    //   'isDeleted',
    //   'enrolledCourses',
    //   'isApproved',
    //   'publishedCourses',
    //   'password'
    // ];
    // const updatePayload: Partial<IUser> = { ...payload } as Partial<IUser>;
    // forbidden.forEach((key) => {
    //   if (updatePayload.hasOwnProperty(key)) delete (updatePayload as any)[key];
    // });
    // const updated = await User.findByIdAndUpdate(userId, updatePayload, { new: true }).select('-password');
    // if (!updated) {
    //   throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    // }
    // return updated;
};
const deleteUser = async (userId) => {
    const deleted = await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
    if (!deleted) {
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }
    return deleted;
};
const addToWishlist = async (userId, courseId) => {
    const course = await Course.findById(courseId);
    if (!course) {
        throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
    }
    const updatedUser = await User.findByIdAndUpdate(userId, {
        $addToSet: {
            wishlist: new Types.ObjectId(courseId),
        },
    }, { new: true }).select("-password");
    console.log("up", updatedUser);
    if (!updatedUser) {
        throw new AppError(StatusCodes.NOT_FOUND, "User not found");
    }
    return updatedUser.wishlist;
};
const removeFromWishlist = async (userId, courseId) => {
    const updated = await User.findByIdAndUpdate(userId, { $pull: { wishlist: courseId } }, { new: true }).select('-password');
    if (!updated) {
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }
    return updated.wishlist;
};
const getWishlist = async (userId) => {
    const user = await User.findById(userId).populate({ path: 'wishlist', populate: { path: 'syllabus' } }).select('-password');
    if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }
    return user.wishlist;
};
export const getInstructorDetails = async (instructorId) => {
    const instructorObjectId = new Types.ObjectId(instructorId);
    const [
    // 1️⃣ Course stats
    courseStats, 
    // 2️⃣ Enrollment + students stats
    enrollmentStats, 
    // 3️⃣ Revenue per course
    revenuePerCourse,] = await Promise.all([
        /* ------------------ COURSES ------------------ */
        Course.aggregate([
            { $match: { createdBy: instructorObjectId } },
            {
                $group: {
                    _id: null,
                    total: { $sum: 1 },
                    published: {
                        $sum: { $cond: ["$isPublished", 1, 0] },
                    },
                    draft: {
                        $sum: { $cond: ["$isPublished", 0, 1] },
                    },
                },
            },
        ]),
        /* ---------------- ENROLLMENTS ---------------- */
        Enrollment.aggregate([
            { $match: { paymentStatus: PaymentStatus.PAID } },
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
                $group: {
                    _id: null,
                    totalEnrollments: { $sum: 1 },
                    students: { $addToSet: "$studentId" },
                },
            },
            {
                $project: {
                    totalEnrollments: 1,
                    totalStudents: { $size: "$students" },
                },
            },
        ]),
        /* ------------------ REVENUE ------------------ */
        Enrollment.aggregate([
            { $match: { paymentStatus: PaymentStatus.PAID } },
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
                $group: {
                    _id: "$courseId",
                    title: { $first: "$course.title" },
                    revenue: { $sum: "$course.price" },
                    sales: { $sum: 1 },
                },
            },
        ]),
    ]);
    console.log(revenuePerCourse);
    return {
        courses: {
            total: courseStats[0]?.total || 0,
            published: courseStats[0]?.published || 0,
            draft: courseStats[0]?.draft || 0,
        },
        students: {
            totalEnrollments: enrollmentStats[0]?.totalEnrollments || 0,
            totalStudents: enrollmentStats[0]?.totalStudents || 0,
        },
        revenue: {
            total: revenuePerCourse.reduce((sum, item) => sum + item.revenue, 0),
            perCourse: revenuePerCourse,
        },
    };
};
export const userServices = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getInstructorDetails,
    updateMyProfile,
    addToWishlist,
    removeFromWishlist,
    getWishlist
};
//# sourceMappingURL=user.service.js.map