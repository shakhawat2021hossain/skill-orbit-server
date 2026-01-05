;
;
export const paginate = (options) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 5;
    const skip = (page - 1) * limit;
    return {
        page,
        limit,
        skip,
        sortBy: options.sortBy || "createdAt",
        sortOrder: options.sortOrder === "asc" ? 1 : -1
    };
};
//# sourceMappingURL=pagination.js.map