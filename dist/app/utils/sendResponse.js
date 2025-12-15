export const sendResponse = (res, resData) => {
    res.status(resData.statusCode).json({
        success: resData.success,
        message: resData.message,
        meta: resData.meta || null,
        data: resData.data || null || undefined,
    });
};
//# sourceMappingURL=sendResponse.js.map