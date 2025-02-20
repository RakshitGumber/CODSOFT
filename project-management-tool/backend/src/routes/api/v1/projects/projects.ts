import { verifyToken } from "@/middlewares/verification";
import { Router } from "express";
import createProject from "./createProject";

const router = Router();

router.post("/", verifyToken, createProject);

export default router;
