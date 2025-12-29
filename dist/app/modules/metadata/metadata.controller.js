import {} from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { StatusCodes } from "http-status-codes";
import { metadataServices } from "./metadata.service.js";
const userMetaData = catchAsync(async (req, res) => {
    const result = await metadataServices.userMetaData(req.user);
    sendResponse(res, {
        data: result,
        success: true,
        message: "Retreived MetaData successfully!",
        statusCode: StatusCodes.OK
    });
});
export const metadataControllers = {
    userMetaData
};
//# sourceMappingURL=metadata.controller.js.map