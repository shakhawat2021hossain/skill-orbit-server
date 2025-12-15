import type { IUser } from "../auth/auth.interface.js";
import { Types } from "mongoose";
export declare const getInstructorDetails: (instructorId: string) => Promise<{
    courses: {
        total: any;
        published: any;
        draft: any;
    };
    students: {
        totalEnrollments: any;
        totalStudents: any;
    };
    revenue: {
        total: any;
        perCourse: any[];
    };
}>;
export declare const userServices: {
    getAllUsers: () => Promise<(import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IUser & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    getUserById: (userId: string) => Promise<import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IUser & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updateUser: (userId: string, payload: Partial<IUser>) => Promise<import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IUser & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    deleteUser: (userId: string) => Promise<import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IUser & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getInstructorDetails: (instructorId: string) => Promise<{
        courses: {
            total: any;
            published: any;
            draft: any;
        };
        students: {
            totalEnrollments: any;
            totalStudents: any;
        };
        revenue: {
            total: any;
            perCourse: any[];
        };
    }>;
};
//# sourceMappingURL=user.service.d.ts.map