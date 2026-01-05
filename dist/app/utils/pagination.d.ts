import type { Role } from "../modules/auth/auth.interface.js";
import type { Category } from "../modules/course/course.interface.js";
export interface IPaginate {
    page?: string | number;
    limit?: string | number;
    sortBy?: string;
    sortOrder?: "asc" | "desc" | string;
}
export interface IPaginateOp {
    page: number;
    limit: number;
    sortBy: string;
    sortOrder: number;
    skip: number;
}
export interface IOtherParams {
    searchTerm: string;
    role?: Role;
    category?: Category;
}
export declare const paginate: (options: IPaginate) => IPaginateOp;
//# sourceMappingURL=pagination.d.ts.map