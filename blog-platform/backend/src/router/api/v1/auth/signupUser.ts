import { signupUser } from "@/controllers/v1/auth";
import { hashPassword } from "@/utils/passwordHash";
import type { Request, Response } from "express";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { username, email, password, fullname } = req.body;

    const passwordHashed = await hashPassword(password);

    if (!passwordHashed) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const data: ControllerData = await signupUser(
      username,
      email,
      passwordHashed,
      fullname
    );

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (data.success === false) {
      return res.status(400).json({
        success: false,
        message: data.message,
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Signup successful", data });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
