import { Member } from "@/models/Member";
import type { Request, Response } from "express";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { id } = req.params;

    const members = await Member.findOne({ userId: id });

    if (!members) {
      return res.json({
        success: false,
        message: "user fetch failed",
      });
    }

    return res.json({
      success: true,
      message: "user fetched successfully",
      data: members,
    });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
