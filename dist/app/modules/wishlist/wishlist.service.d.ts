import { Types } from "mongoose";
export declare const wishlistServices: {
    addToWishlist: (userId: string, courseId: string) => Promise<Types.ObjectId[] | undefined>;
    removeFromWishlist: (userId: string, courseId: string) => Promise<Types.ObjectId[] | undefined>;
    getWishlist: (userId: string) => Promise<Types.ObjectId[] | undefined>;
};
//# sourceMappingURL=wishlist.service.d.ts.map