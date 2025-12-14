import { Router } from "express";
import { courseControllers } from "./course.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";

const router = Router()

router.post('/create-course', auth(Role.INSTRUCTOR), courseControllers.createCourse)
router.get('/all', courseControllers.getAllCourses)
router.get('/my-courses', auth(Role.STUDENT), courseControllers.getMyCourses)
router.get('/ins-courses', auth(Role.INSTRUCTOR), courseControllers.getInstructorCourses)
router.get('/:courseId', courseControllers.getCourseById)
router.patch('/:courseId', auth(Role.INSTRUCTOR), courseControllers.updateCourse)

export const courseRoutes = router