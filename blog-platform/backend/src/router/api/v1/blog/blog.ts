import { Router } from "express";
import getBlogs from "./getBlogs";
import getBlogById from "./getBlogById";
import createBlog from "./createBlog";
import updateBlog from "./updateBlog";
import { verifyToken } from "@/middlewares/verification";
import deleteBlog from "./deleteBlog";
import createComment from "../comments/createComment";

const router = Router();

router
  .get("/", getBlogs)
  .get("/:slug", getBlogById)
  .post("/", verifyToken, createBlog)
  .put("/:slug", verifyToken, updateBlog)
  .delete("/:slug", verifyToken, deleteBlog)
  .post("/:slug/comment", verifyToken, createComment);

export default router;
