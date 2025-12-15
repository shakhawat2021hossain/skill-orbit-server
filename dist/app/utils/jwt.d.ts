import jwt, { type JwtPayload } from "jsonwebtoken";
export declare const generateTokens: (payload: JwtPayload) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare const verifyToken: (token: string, secret: string) => Promise<jwt.JwtPayload>;
//# sourceMappingURL=jwt.d.ts.map