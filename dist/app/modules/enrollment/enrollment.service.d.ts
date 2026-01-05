import mongoose from "mongoose";
import type { IPaginateOp } from "../../utils/pagination.js";
export declare const enrollmentServices: {
    enroll: (courseId: string, userId: string) => Promise<{
        session: import("stripe").Stripe.Response<import("stripe").Stripe.Checkout.Session>;
    }>;
    updateProgress: (courseId: string, studentId: string, lessonId: string) => Promise<mongoose.Document<unknown, {}, import("./enrollment.interface.js").IEnrollment, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<import("./enrollment.interface.js").IEnrollment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getEnrolledCourse: (courseId: string, userId: string) => Promise<{
        enrollment: mongoose.Document<unknown, {}, import("./enrollment.interface.js").IEnrollment, {
            id: string;
        }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<import("./enrollment.interface.js").IEnrollment & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        };
        course: mongoose.Document<unknown, {}, import("../course/course.interface.js").ICourse, {
            id: string;
        }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<import("../course/course.interface.js").ICourse & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        };
    }>;
    getEnrollmentsOfInstructor: (instructorId: string, { page, limit, skip, sortBy, sortOrder }: IPaginateOp) => Promise<{
        enrollments: any;
        meta: {
            page: number;
            limit: number;
            total: any;
        };
    }>;
};
//# sourceMappingURL=enrollment.service.d.ts.map