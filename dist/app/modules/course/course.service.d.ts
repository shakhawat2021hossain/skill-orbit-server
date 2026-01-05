import type { ICourse } from "./course.interface.js";
import type { JwtPayload } from "jsonwebtoken";
import type { IOtherParams, IPaginateOp } from "../../utils/pagination.js";
export declare const courseServices: {
    getAllCourses: ({ page, limit, sortBy, sortOrder }: IPaginateOp, otherParams: IOtherParams) => Promise<{
        courses: (import("mongoose").Document<unknown, {}, ICourse, {
            id: string;
        }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
        };
    }>;
    getPublicCourseDetails: (courseId: string) => Promise<(ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getInstructorCourses: (decodedToken: JwtPayload) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    getAdminCourses: () => Promise<(import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    createCourse: (payload: ICourse, instructorId: string) => Promise<import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getCourseById: (courseId: string) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    getMyCourses: (userId: string) => Promise<import("mongoose").Types.ObjectId[]>;
    updateCourse: (courseId: string, instructorId: string, payload: Partial<ICourse>) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    adminToggleDeleteCourse: (courseId: string) => Promise<{
        message: string;
        course: import("mongoose").Document<unknown, {}, ICourse, {
            id: string;
        }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ICourse & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        };
    }>;
};
//# sourceMappingURL=course.service.d.ts.map