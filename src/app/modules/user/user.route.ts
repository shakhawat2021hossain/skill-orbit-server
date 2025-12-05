import { Router } from "express";
import { userControllers } from "./user.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";

const router = Router();

router.get('/all', auth(Role.ADMIN), userControllers.getAllUsers);
router.get('/me', auth(Role.ADMIN, Role.STUDENT), userControllers.getMyProfile);
router.get('/:userId', auth(Role.ADMIN), userControllers.getUserById);
router.patch('/:userId', auth(Role.ADMIN), userControllers.updateUser);
router.delete('/:userId', auth(Role.ADMIN), userControllers.deleteUser);

export const userRoutes = router;
