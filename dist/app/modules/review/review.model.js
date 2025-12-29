import { model, Schema } from "mongoose";
const reviewSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    review: {
        type: String,
        trim: true,
        maxlength: 1000,
    },
    reviewer: {
        type: String,
        trim: true,
        maxlength: 200,
    },
    isEdited: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
export const Review = model("Review", reviewSchema);
//# sourceMappingURL=review.model.js.map