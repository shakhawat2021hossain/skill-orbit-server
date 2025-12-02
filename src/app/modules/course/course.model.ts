import { Schema, model, Types } from "mongoose";
import { Category, type ICourse, type ILesson } from "./course.interface.js";

// course
const LessonSchema = new Schema<ILesson>({
    title: { type: String, required: true },
    videoUrl: { type: String },
    duration: { type: Number, default: 0 },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true }
},
    {
        timestamps: true,
        versionKey: false,

    }
);
export const Lesson = model("Lesson", LessonSchema);


// const ModuleSchema = new Schema<IModule>({
//     title: { type: String, required: true },
//     lessons: { type: [LessonSchema], default: [] }
// }, { _id: true });


const CourseSchema = new Schema<ICourse>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    instructor: { type: String, required: true },
    thumbnail: { type: String },
    tags: { type: [String], default: [] },
    syllabus: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
    totalDuration: { type: Number, default: 0 },
    resources: { type: [String], default: [] },
    students: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }
},
    {
        timestamps: true,
        versionKey: false,

    }
);

export const Course = model("Course", CourseSchema);


