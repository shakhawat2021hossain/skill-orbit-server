import type { Role } from "../modules/auth/auth.interface.js";
import type { Category } from "../modules/course/course.interface.js";

export interface IPaginate {
    page?: string | number;
    limit?: string | number;
    sortBy?: string;
    sortOrder?: "asc" | "desc" | string;
};

export interface IPaginateOp {
    page: number;
    limit: number;
    sortBy: string;
    sortOrder: number;
    skip: number;
};

export interface IOtherParams {
    searchTerm: string;
    role?: Role;
    category?: Category;
}


export const paginate = (options: IPaginate): IPaginateOp => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 5;
    const skip = (page - 1) * limit

    return {
        page,
        limit,
        skip,
        sortBy: options.sortBy || "createdAt",
        sortOrder: options.sortOrder === "asc" ? 1 : -1
    };
};