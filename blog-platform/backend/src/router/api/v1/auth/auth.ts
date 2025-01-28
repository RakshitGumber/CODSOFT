import { Router } from "express";

import { validateRequestBody } from "@/middlewares/zodValidate";
import { verifyToken } from "@/middlewares/verification";

import { loginSchema } from "@/schemas/loginUserSchema";
import { signupSchema } from "@/schemas/signupUserSchema";

import loginUser from "./loginUser";
import signupUser from "./signupUser";
import verifyUser from "./verifyUser";

const router = Router();

router.get("/", verifyToken, (req, res) =>
  res.json({ message: "accessed the protected route" })
);
router.post("/login", validateRequestBody(loginSchema), loginUser);
router.post("/signup", validateRequestBody(signupSchema), signupUser);
router.post("/verify", verifyUser);
router.post("/refresh-token", verifyUser);

export default router;
