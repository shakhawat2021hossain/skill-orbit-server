import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route.js";
import { courseRoutes } from "../modules/course/course.route.js";

export const router = Router()
const apiRoutes = [

    {
        path: '/auth',
        routes: authRoutes
    },
    {
        path: '/course',
        routes: courseRoutes
    },
    
]

apiRoutes.forEach(route => router.use(route.path, route.routes)
)