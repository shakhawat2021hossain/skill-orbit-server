import { Schema, model, Types } from "mongoose";
import { Category, type ICourse, type IEnrollment, type ILesson, type IModule } from "./course.interface.js";

// course
const LessonSchema = new Schema<ILesson>({
    title: { type: String, required: true },
    videoUrl: { type: String },
    duration: { type: Number, default: 0 }
}, { _id: true });


const ModuleSchema = new Schema<IModule>({
    title: { type: String, required: true },
    lessons: { type: [LessonSchema], default: [] }
}, { _id: true });


const CourseSchema = new Schema<ICourse>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    instructor: { type: String, required: true },
    thumbnail: { type: String },
    tags: { type: [String], default: [] },
    syllabus: { type: [ModuleSchema], default: [] },
    totalDuration: { type: Number, default: 0 },
    resources: { type: [String], default: [] },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }
},
    {
        timestamps: true,
        versionKey: false,

    }
);

export const Course = model("Course", CourseSchema);




// enrollment
const EnrollmentSchema = new Schema<IEnrollment>({
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    progress: { type: Number, default: 0 },
    completedLessons: { type: [Schema.Types.ObjectId], ref: "Lesson", default: [] }
},
    {
        timestamps: true,
        versionKey: false,

    }
);

export const Enrollment = model("Enrollment", EnrollmentSchema);
