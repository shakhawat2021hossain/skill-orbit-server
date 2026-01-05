import { Router } from "express";
import { enrollmentControllers } from "./enrollment.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";
const router = Router();
router.get('/data', auth(Role.INSTRUCTOR), enrollmentControllers.getInstructorEnrollments);
router.get('/:courseId', auth(Role.STUDENT), enrollmentControllers.getEnrolledCourse);
router.post('/:courseId/enroll', auth(Role.STUDENT), enrollmentControllers.enroll);
router.patch('/:courseId/progress/:lessonId', auth(Role.STUDENT), enrollmentControllers.updateProgress);
// Instructor: get enrollments of their courses (paginated)
export const enrollmentRoutes = router;
//# sourceMappingURL=enrollment.route.js.map