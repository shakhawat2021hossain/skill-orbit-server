import type { Request, Response } from "express";
export declare const userControllers: {
    getAllUsers: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getUserById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMyProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateMyProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getInstructorDetails: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map