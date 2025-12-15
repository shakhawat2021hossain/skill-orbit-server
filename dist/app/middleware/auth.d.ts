import type { NextFunction, Request, Response } from "express";
export declare const auth: (...authRoles: string[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map