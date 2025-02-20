import { verifyToken } from "@/middlewares/verification";
import { Router } from "express";
import getUser from "./getUser";
import getUserById from "./getUserById";
import getUserProjects from "./getUserProjects";

const router = Router();

router.get("/", verifyToken, getUser);
router.get("/:id", verifyToken, getUserById);
router.get("/:id/projects", verifyToken, getUserProjects);
export default router;
