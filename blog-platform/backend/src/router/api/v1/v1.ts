import { Router } from "express";
import { auth } from "./auth";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from v1",
  });
});
router.use("/auth", auth);
export default router;
