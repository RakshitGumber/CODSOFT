import { Schema, model } from "mongoose";
import type { CommentModel } from "@/types/CommentModel";

const commentSchema = new Schema<CommentModel>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  blogId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Comment = model("Comment", commentSchema);
