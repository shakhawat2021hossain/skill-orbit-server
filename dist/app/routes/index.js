import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route.js";
import { courseRoutes } from "../modules/course/course.route.js";
import { enrollmentRoutes } from "../modules/enrollment/enrollment.route.js";
import { userRoutes } from "../modules/user/user.route.js";
import { lessonsRoutes } from "../modules/lesson/lesson.route.js";
import { metadataRoutes } from "../modules/metadata/metadata.route.js";
import { wishlistRoutes } from "../modules/wishlist/wishlist.route.js";
import { reviewRoutes } from "../modules/review/review.route.js";
export const router = Router();
const apiRoutes = [
    {
        path: '/auth',
        routes: authRoutes
    },
    {
        path: '/course',
        routes: courseRoutes
    },
    {
        path: '/enrollment',
        routes: enrollmentRoutes
    },
    {
        path: '/user',
        routes: userRoutes
    },
    {
        path: '/lesson',
        routes: lessonsRoutes
    },
    {
        path: '/wishlist',
        routes: wishlistRoutes
    },
    {
        path: '/metadata',
        routes: metadataRoutes
    },
    {
        path: '/review',
        routes: reviewRoutes
    },
];
apiRoutes.forEach(route => router.use(route.path, route.routes));
//# sourceMappingURL=index.js.map