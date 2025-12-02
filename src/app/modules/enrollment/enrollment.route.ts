import { Router } from "express"
import { enrollmentControllers } from "./enrollment.controller.js"
import { auth } from "../../middleware/auth.js"
import { Role } from "../auth/auth.interface.js"


const router = Router()

router.post('/:courseId/enroll', auth(Role.STUDENT), enrollmentControllers.enroll)

export const enrollmentRoutes = router