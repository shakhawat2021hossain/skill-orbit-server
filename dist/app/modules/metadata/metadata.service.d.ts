import type { JwtPayload } from "jsonwebtoken";
export declare const metadataServices: {
    userMetaData: (user: JwtPayload) => Promise<{
        users: {
            total: number;
            blocked: number;
        };
        courses: {
            total: number;
            published: number;
            unpublished: number;
        };
        enrollments: {
            total: number;
        };
        finance: {
            totalRevenue: number;
        };
    } | {
        courses: {
            total: number;
            published: number;
            draft: number;
        };
        students: number;
        income: {
            total: number;
        };
    } | {
        courses: {
            enrolled: number;
            completed: number;
            wishlist: number;
        };
        finance: {
            totalSpent: number;
        };
    }>;
};
//# sourceMappingURL=metadata.service.d.ts.map