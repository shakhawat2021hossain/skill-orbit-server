import { type Request, type Response } from "express";
export declare const authControllers: {
    register: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    credentialLogin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    logout: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    forgotPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map