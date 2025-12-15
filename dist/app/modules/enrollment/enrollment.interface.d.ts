import type { Types } from "mongoose";
export declare enum PaymentStatus {
    PAID = "PAID",
    UNPAID = "UNPAID"
}
export interface IEnrollment {
    studentId: Types.ObjectId;
    courseId: Types.ObjectId;
    paymentIntentId?: string;
    checkoutSessionId?: string;
    amountPaid?: number;
    paymentStatus?: PaymentStatus;
    progress: number;
    completedLessons: Types.ObjectId[];
}
//# sourceMappingURL=enrollment.interface.d.ts.map