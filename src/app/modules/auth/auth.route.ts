import { Router } from "express";
import { authControllers } from "./auth.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "./auth.interface.js";

const router = Router()

router.post('/register', authControllers.register)
router.post('/login', authControllers.credentialLogin)
router.post('/logout', auth(...Object.values(Role)), authControllers.logout)
router.post('/forgot-password', authControllers.forgotPassword)
router.post('/reset-password', authControllers.resetPassword)

export const authRoutes = router