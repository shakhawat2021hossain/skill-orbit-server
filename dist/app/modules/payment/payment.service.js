import { Enrollment } from "../enrollment/enrollment.model.js";
import { Course } from "../course/course.model.js";
import { PaymentStatus } from "../enrollment/enrollment.interface.js";
const handleWebhookEvent = async (event) => {
    console.log("🔔 Stripe event received:", event.type);
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object;
            const courseId = session.metadata?.courseId;
            const studentId = session.metadata?.studentId;
            console.log("event type: checkout.session.completed");
            if (!courseId || !studentId) {
                console.error("❌ Missing metadata in Stripe session!");
                return;
            }
            const enrollment = await Enrollment.findOneAndUpdate({ courseId, studentId }, {
                $set: {
                    paymentStatus: PaymentStatus.PAID
                },
            }, { new: true, upsert: true });
            // Add student to course student list
            await Course.findByIdAndUpdate(courseId, {
                $addToSet: { students: studentId },
            });
            console.log(`✅ Payment successful. Enrollment updated for student ${studentId}`);
            break;
        }
        default:
            console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }
};
export const paymentServices = {
    handleWebhookEvent,
};
//# sourceMappingURL=payment.service.js.map