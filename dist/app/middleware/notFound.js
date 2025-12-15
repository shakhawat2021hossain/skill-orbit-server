import { StatusCodes } from "http-status-codes";
const notFound = (req, res, next) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    });
};
export default notFound;
//# sourceMappingURL=notFound.js.map