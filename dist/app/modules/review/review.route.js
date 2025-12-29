import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";
import { reviewControllers } from "./review.controller.js";
const router = Router();
router.post('/add', auth(Role.STUDENT), reviewControllers.postReview);
router.get('/:courseId', reviewControllers.getReviews);
export const reviewRoutes = router;
//# sourceMappingURL=review.route.js.map