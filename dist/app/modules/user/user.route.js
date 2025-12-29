import { Router } from "express";
import { userControllers } from "./user.controller.js";
import { auth } from "../../middleware/auth.js";
import { Role } from "../auth/auth.interface.js";
const router = Router();
router.get('/all', auth(Role.ADMIN), userControllers.getAllUsers);
router.get('/me', auth(Role.ADMIN, Role.INSTRUCTOR, Role.STUDENT), userControllers.getMyProfile);
// router.patch('/me', auth(Role.ADMIN, Role.INSTRUCTOR, Role.STUDENT), userControllers.updateMyProfile);
router.patch('/:id/update', auth(...Object.values(Role)), userControllers.updateMyProfile);
router.get('/details', auth(Role.INSTRUCTOR), userControllers.getInstructorDetails);
router.get('/:userId', auth(Role.ADMIN), userControllers.getUserById);
router.patch('/:userId', auth(Role.ADMIN), userControllers.updateUser);
router.delete('/:userId', auth(Role.ADMIN), userControllers.deleteUser);
export const userRoutes = router;
//# sourceMappingURL=user.route.js.map