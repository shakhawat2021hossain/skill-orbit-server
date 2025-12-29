import type { Types } from "mongoose";
import type { IReview } from "./review.interface.js";
export declare const reviewServices: {
    postReview: (payload: IReview, userId: string) => Promise<import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getReviews: (courseId: string) => Promise<(import("mongoose").Document<unknown, {}, IReview, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IReview & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
};
//# sourceMappingURL=review.service.d.ts.map