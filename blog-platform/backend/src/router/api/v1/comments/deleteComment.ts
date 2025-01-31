import { Comment } from "@/models/Comment";
import type { Request, Response } from "express";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { slug } = req.params;

    const data = await Comment.findOneAndDelete({ _id: slug });

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Unable to update comment",
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
