import { Types } from "mongoose";

export enum Role {
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
    institute?: string

    // Student fields
    enrolledCourses?: Types.ObjectId[];

    // Instructor fields
    publishedCourses?: Types.ObjectId[];

}