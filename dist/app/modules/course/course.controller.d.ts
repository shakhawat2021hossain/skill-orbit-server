import type { Request, Response } from "express";
export declare const courseControllers: {
    createCourse: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllCourses: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getInstructorCourses: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getCourseById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMyCourses: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateCourse: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=course.controller.d.ts.map