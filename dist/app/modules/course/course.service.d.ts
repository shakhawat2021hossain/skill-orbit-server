import type { ICourse } from "./course.interface.js";
export declare const courseServices: {
    getAllCourses: () => Promise<(import("mongoose").Document<unknown, {}, ICourse, {
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
    getInstructorCourses: (instructorId: string) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {
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
};
//# sourceMappingURL=course.service.d.ts.map