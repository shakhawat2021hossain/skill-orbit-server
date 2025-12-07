import type { Types } from "mongoose";
export enum PaymentStatus {
    PAID = "PAID",
    UNPAID = "UNPAID"
}

export interface IEnrollment {
    studentId: Types.ObjectId;
    courseId: Types.ObjectId;
    progress: number;
    paymentStatus?: PaymentStatus
    completedLessons: Types.ObjectId[];
}
