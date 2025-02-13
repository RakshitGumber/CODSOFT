import { Schema, model } from "mongoose";
import type { BlogModel } from "@/types/BlogModel";

const blockSchema = new Schema<BlogModel>({
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  tags: {
    type: [String],
  },
  images: {
    type: [String],
  },
  animeName: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    enum: ["Published", "Draft"],
    default: "Published",
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

export const Blog = model("Blog", blockSchema);
