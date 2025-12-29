import { Schema, model, Types } from "mongoose";
import { Category } from "./course.interface.js";
// Lesson
const LessonSchema = new Schema({
    title: { type: String, required: true },
    videoUrl: { type: String },
    duration: { type: Number, default: 0 },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true }
}, {
    timestamps: true,
    versionKey: false,
});
export const Lesson = model("Lesson", LessonSchema);
// Course
const CourseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    introVideo: { type: String },
    isPublished: { type: Boolean, required: true },
    instructor: { type: String, required: true },
    thumbnail: { type: String },
    tags: { type: [String], default: [] },
    syllabus: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
    totalDuration: { type: Number, default: 0 },
    resources: [
        {
            title: { type: String, required: true },
            link: { type: String, required: true }
        }
    ],
    isDeleted: { type: Boolean, default: false },
    students: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: {
        count: { type: Number, default: 0 },
        average: { type: Number, default: 0 }
    }
}, {
    timestamps: true,
    versionKey: false,
});
export const Course = model("Course", CourseSchema);
//# sourceMappingURL=course.model.js.map