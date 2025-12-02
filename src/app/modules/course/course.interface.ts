import type { Types } from "mongoose";

export enum Category {
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
export interface ICourse {
    title: string;
    description: string;
    price: number;
    category: Category;
    instructor: string;

    thumbnail?: string;
    tags?: string[];
    syllabus?: ILesson[];
    totalDuration?: number;
    resources?: string[];
    createdBy: Types.ObjectId;
}

// export interface IModule {
//     title: string;
//     lessons: ILesson[];
// }

export interface ILesson {
    title: string;
    videoUrl?: string;
    duration?: number; 
}


export interface IEnrollment {
    studentId: Types.ObjectId;
    courseId: Types.ObjectId;
    progress: number; 
    completedLessons: Types.ObjectId[];
}
