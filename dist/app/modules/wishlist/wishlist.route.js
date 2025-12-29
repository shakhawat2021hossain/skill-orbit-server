import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { wishlistControllers } from "./wishlist.controller.js";
import { Role } from "../auth/auth.interface.js";
const router = Router();
router.get('/get-all', auth(Role.STUDENT), wishlistControllers.getWishlist);
router.post('/:courseId', auth(Role.STUDENT), wishlistControllers.addToWishlist);
router.delete('/:courseId', auth(Role.STUDENT), wishlistControllers.removeFromWishlist);
export const wishlistRoutes = router;
//# sourceMappingURL=wishlist.route.js.map