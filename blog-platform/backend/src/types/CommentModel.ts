import type { ObjectId } from "mongoose";

export interface CommentModel {
  _id: string;
  userId: ObjectId;
  blogId: ObjectId;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
