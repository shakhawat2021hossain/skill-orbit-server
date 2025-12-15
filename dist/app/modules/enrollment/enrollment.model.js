import { model, Schema } from "mongoose";
import { PaymentStatus } from "./enrollment.interface.js";
// enrollment
const EnrollmentSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    paymentStatus: {
        type: String,
        enum: Object.values(PaymentStatus),
        default: PaymentStatus.UNPAID
    },
    paymentIntentId: String,
    checkoutSessionId: String,
    amountPaid: {
        type: Number,
    },
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    completedLessons: { type: [Schema.Types.ObjectId], ref: "Lesson", default: [] }
}, {
    timestamps: true,
    versionKey: false,
});
export const Enrollment = model("Enrollment", EnrollmentSchema);
//# sourceMappingURL=enrollment.model.js.map