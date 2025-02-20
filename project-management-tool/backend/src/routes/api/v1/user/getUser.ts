import { User } from "@/models/User";
import type { Request, Response } from "express";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const data = await User.find().limit(10);
    if (!data) {
      return res.json({
        success: false,
        message: "user fetch failed",
      });
    }

    return res.json({
      success: true,
      message: "user fetched successfully",
      data,
    });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
