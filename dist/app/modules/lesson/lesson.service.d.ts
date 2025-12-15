import type { ILesson } from "../course/course.interface.js";
export declare const lessonServices: {
    createLesson: (payload: ILesson, courseId: string) => Promise<import("mongoose").Document<unknown, {}, ILesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    deleteLesson: (lessonId: string, courseId: string, instructorId: string) => Promise<{
        message: string;
    }>;
    updateLesson: (lessonId: string, courseId: string, instructorId: string, payload: Partial<ILesson>) => Promise<(import("mongoose").Document<unknown, {}, ILesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ILesson & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=lesson.service.d.ts.map