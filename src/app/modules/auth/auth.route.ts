import { Router } from "express";
import { authControllers } from "./auth.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "./auth.interface.js";

const router =  Router()

router.post('/register', authControllers.register)
router.post('/login', authControllers.credentialLogin)
router.post('/logout', auth(Role.ADMIN, Role.INSTRUCTOR, Role.STUDENT), authControllers.logout)

export const authRoutes = router