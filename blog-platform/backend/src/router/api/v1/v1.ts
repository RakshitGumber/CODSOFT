import { Router } from "express";
import { auth } from "./auth";
import { blog } from "./blog";
import { comments } from "./comments";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from v1",
  });
});
router.use("/auth", auth);
router.use("/blog", blog);
router.use("/comment", comments);

export default router;
