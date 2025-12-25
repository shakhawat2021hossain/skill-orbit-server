import { Router } from "express";
import { Role } from "../auth/auth.interface.js";
import { auth } from "../../middleware/auth.js";
import { metadataControllers } from "./metadata.controller.js";

const router = Router()

router.get('/user', auth(Role.ADMIN, Role.INSTRUCTOR, Role.STUDENT), metadataControllers.userMetaData)


export const metadataRoutes = router