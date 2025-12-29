import { Types } from "mongoose";
import AppError from "../../utils/appError.js";
import { User } from "../auth/auth.model.js";
import { Course } from "../course/course.model.js";
import { StatusCodes } from "http-status-codes";
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
export const wishlistServices = {
    addToWishlist,
    removeFromWishlist,
    getWishlist
};
//# sourceMappingURL=wishlist.service.js.map