import type { Request, Response } from "express";
import { verifyEmail } from "@/controllers/v1/auth";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { token } = req.query;

    const data = await verifyEmail(token as string);

    if (!data)
      return res.status(400).json({ success: false, message: "Invalid token" });

    if (!data.success)
      return res.status(400).json({ success: false, message: data.message });

    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
