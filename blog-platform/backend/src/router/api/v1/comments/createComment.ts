import type { Request, Response } from "express";
import { Comment } from "@/models/Comment";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { slug } = req.query;

    const data = Comment.create({ ...req.body, blogId: slug });

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Unable to fetch blogs",
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
