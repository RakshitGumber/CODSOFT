import { Router } from "express";
import getCommentById from "./getCommentById";
import updateComment from "./updateComment";
import deleteComment from "./deleteComment";
import { verifyToken } from "@/middlewares/verification";

const router = Router();

router.get("/:slug", getCommentById);
router.put("/:slug", verifyToken, updateComment);
router.delete("/:slug", verifyToken, deleteComment);

export default router;
