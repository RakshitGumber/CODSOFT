import type { Request, Response } from "express";
import { Blog } from "@/models/Blog";
import { User } from "@/models/User";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 }).limit(20);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Unable to fetch blogs",
      });
    }

    if (!data.length) {
      return res.status(400).json({
        success: false,
        message: "No blogs found",
      });
    }

    const mappedData = await Promise.all(
      data.map(async (blog) => {
        const author = await User.findOne({ _id: blog.authorId });
        return {
          ...blog.toObject(), // Convert Mongoose document to a plain object
          author: {
            _id: author?._id,
            fullname: author?.fullname,
            username: author?.username,
            profilepic: author?.profilepic,
            bio: author?.bio,
          },
        };
      })
    );

    return res.status(200).json({ success: true, data: mappedData });
  } catch (error) {
    const err: IError = {
      success: false,
      message: JSON.stringify(error),
    };
    return res.status(500).json(err);
  }
};
