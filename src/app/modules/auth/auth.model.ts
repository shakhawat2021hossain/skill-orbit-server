import { model, Schema } from "mongoose";
import type { IUser } from "./auth.interface.js";
import { Role } from "./auth.interface.js";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.STUDENT
    },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },
    institute: { type: String },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    
    enrolledCourses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    publishedCourses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course",
        },
    ],


}, {
    timestamps: true,
    versionKey: false,

});


export const User = model("User", userSchema);