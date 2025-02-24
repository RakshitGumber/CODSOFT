import type { Request, Response } from "express";
import { Blog } from "@/models/Blog";
import { Comment } from "@/models/Comment";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { slug } = req.params;

    const data = await Blog.findOneAndUpdate(
      { _id: slug },
      { $inc: { views: 1 } },
      { new: true } // Returns the updated document
    );

    const comments = await Comment.find({ blogId: slug });
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Unable to fetch blogs",
      });
    }

    return res
      .status(200)
      .json({ success: true, data: { ...data.toObject(), comments } });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
