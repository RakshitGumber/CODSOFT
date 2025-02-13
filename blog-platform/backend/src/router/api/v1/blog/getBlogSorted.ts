import type { Request, Response } from "express";
import { Blog } from "@/models/Blog";
import { User } from "@/models/User";

export default async (
  req: Request,
  res: Response,
  sortType?: string
): Promise<Response<IResponse | IError>> => {
  try {
    let sortQuery = {};

    if (sortType === "latest") {
      sortQuery = { createdAt: -1 };
    } else if (sortType === "trending") {
      sortQuery = { views: -1 };
    }

    const data = await Blog.find().sort(sortQuery).limit(10);

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
            name: author?.fullname,
            username: author?.username,
            profilepic: author?.profilepic,
            bio: author?.bio,
          },
        };
      })
    );

    return res.status(200).json({ success: true, data: mappedData });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: JSON.stringify(error),
    });
  }
};
