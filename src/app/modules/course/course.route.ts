import { Router } from "express";
import { courseControllers } from "./course.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";

const router = Router()

router.post('/create-course', auth(Role.ADMIN), courseControllers.createCourse)
router.patch('/:courseId/create-lesson', courseControllers.addLesson)

export const courseRoutes = router