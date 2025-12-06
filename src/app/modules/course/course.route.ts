import { Router } from "express";
import { courseControllers } from "./course.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";

const router = Router()

router.post('/create-course', auth(Role.INSTRUCTOR), courseControllers.createCourse)
router.get('/all', courseControllers.getAllCourses)
router.post('/:courseId/create-lesson', auth(Role.INSTRUCTOR), courseControllers.createLesson)
router.get('/:courseId', courseControllers.getCourseById)

export const courseRoutes = router