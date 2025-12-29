import type { Types } from "mongoose";
export declare enum Category {
    WEB_DEVELOPMENT = "Web Development",
    PROGRAMMING = "Programming",
    DATA_SCIENCE = "Data Science",
    MACHINE_LEARNING = "Machine Learning",
    DEVOPS = "DevOps",
    CLOUD = "Cloud",
    MOBILE = "Mobile Development",
    CYBER_SECURITY = "Cyber Security",
    UI_UX = "UI/UX Design"
}
export type TResource = {
    title: string;
    link: string;
};
export interface ICourse {
    title: string;
    description: string;
    price: number;
    category: Category;
    isPublished: boolean;
    instructor: string;
    introVideo?: string;
    resources?: TResource[];
    thumbnail?: string;
    tags?: string[];
    syllabus?: Types.ObjectId[];
    totalDuration?: number;
    createdBy: Types.ObjectId;
    students?: Types.ObjectId[];
    isDeleted?: boolean;
    rating: {
        average: number;
        count: number;
    };
}
export interface ILesson {
    title: string;
    videoUrl?: string;
    duration?: number;
    courseId: Types.ObjectId;
}
//# sourceMappingURL=course.interface.d.ts.map