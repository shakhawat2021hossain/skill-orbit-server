import { StatusCodes } from "http-status-codes";
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;
    res.status(statusCode).json({
        success,
        message,
        error
    });
};
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map