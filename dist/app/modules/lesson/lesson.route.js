import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { lessonControllers } from "./lesson.controller.js";
import { Role } from "../auth/auth.interface.js";
const router = Router();
router.post('/create/:courseId', auth(Role.INSTRUCTOR), lessonControllers.createLesson);
router.patch('/:courseId/:lessonId', auth(Role.INSTRUCTOR), lessonControllers.updateLesson);
router.delete('/:courseId/:lessonId', auth(Role.INSTRUCTOR), lessonControllers.deleteLesson);
export const lessonsRoutes = router;
//# sourceMappingURL=lesson.route.js.map