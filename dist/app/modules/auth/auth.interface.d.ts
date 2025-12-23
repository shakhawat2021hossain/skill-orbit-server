import { Types } from "mongoose";
export declare enum Role {
    ADMIN = "ADMIN",
    INSTRUCTOR = "INSTRUCTOR",
    STUDENT = "STUDENT"
}
export interface IUser {
    name: string;
    email: string;
    password: string;
    role: Role;
    phone?: string;
    picture?: string;
    isDeleted?: boolean;
    address?: string;
    isBlocked?: boolean;
    institute?: string;
    enrolledCourses?: Types.ObjectId[];
    wishlist?: Types.ObjectId[];
    publishedCourses?: Types.ObjectId[];
    isApproved?: boolean;
}
//# sourceMappingURL=auth.interface.d.ts.map