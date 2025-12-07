import { model, Schema } from "mongoose";
import { PaymentStatus, type IEnrollment } from "./enrollment.interface.js";


// enrollment
const EnrollmentSchema = new Schema<IEnrollment>({
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    progress: { type: Number, default: 0 },
    paymentStatus: {
        type: String,
        enum: Object.values(PaymentStatus),
        default: PaymentStatus.UNPAID
    },
    completedLessons: { type: [Schema.Types.ObjectId], ref: "Lesson", default: [] }
},
    {
        timestamps: true,
        versionKey: false,

    }
);

export const Enrollment = model("Enrollment", EnrollmentSchema);
