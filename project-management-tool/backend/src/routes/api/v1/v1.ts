import { Router } from "express";
import { auth } from "./auth";
import { user } from "./user";
import { projects } from "./projects";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from v1",
  });
});
router.use("/auth", auth);
router.use("/user", user);
router.use("/project", projects);
export default router;
