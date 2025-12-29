import type { Types } from "mongoose";
export interface IReview {
    studentId: Types.ObjectId;
    courseId: Types.ObjectId;
    rating: number;
    review?: string;
    reviewer?: string;
    isEdited: boolean;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=review.interface.d.ts.map