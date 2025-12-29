import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { wishlistServices } from "./wishlist.service.js";
import { StatusCodes } from "http-status-codes";
const addToWishlist = catchAsync(async (req, res) => {
    const userId = req.user?.userId;
    const courseId = req.params.courseId;
    const result = await wishlistServices.addToWishlist(userId, courseId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Added to wishlist successfully!",
        statusCode: StatusCodes.OK
    });
});
const removeFromWishlist = catchAsync(async (req, res) => {
    const userId = req.user?.userId;
    const courseId = req.params.courseId;
    const result = await wishlistServices.removeFromWishlist(userId, courseId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Removed from wishlist successfully!",
        statusCode: StatusCodes.OK
    });
});
const getWishlist = catchAsync(async (req, res) => {
    const userId = req.user?.userId;
    console.log("hitted getwishlist");
    const result = await wishlistServices.getWishlist(userId);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retrieved wishlist successfully!",
        statusCode: StatusCodes.OK
    });
});
export const wishlistControllers = {
    addToWishlist,
    getWishlist,
    removeFromWishlist
};
//# sourceMappingURL=wishlist.controller.js.map