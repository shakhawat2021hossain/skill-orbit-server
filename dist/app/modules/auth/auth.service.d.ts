import type { IUser } from "./auth.interface.js";
export declare const authServices: {
    register: (payload: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    credentialLogin: (payload: Partial<IUser>) => Promise<{
        user: IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        accessToken: string;
        refreshToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map