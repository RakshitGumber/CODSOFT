import { Router } from "express";
import getBlogs from "./getBlogs";
import getBlogById from "./getBlogById";
import createBlog from "./createBlog";
import updateBlog from "./updateBlog";
import { verifyToken } from "@/middlewares/verification";
import deleteBlog from "./deleteBlog";
import createComment from "../comments/createComment";
import getBlogsSorted from "./getBlogSorted";

const router = Router();

router
  .get("/", getBlogs)
  .get("/trending", (req, res) => getBlogsSorted(req, res, "trending"))
  .get("/latest", (req, res) => getBlogsSorted(req, res, "latest"))
  .get("/:slug", getBlogById)
  .post("/", verifyToken, createBlog)
  .put("/:slug", verifyToken, updateBlog)
  .delete("/:slug", verifyToken, deleteBlog)
  .post("/:slug/comment", verifyToken, createComment);

export default router;
