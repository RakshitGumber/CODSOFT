import type { Request, Response } from "express";
import { loginUser } from "@/controllers/v1/auth";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Login successful", data });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
