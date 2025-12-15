import type { Response } from "express";
interface IResData<T> {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
        page: number;
        limit: number;
        total: number;
    };
    data: T | null | undefined;
}
export declare const sendResponse: <T>(res: Response, resData: IResData<T>) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map