import type { ObjectId } from "mongoose";

export interface BlogModel {
  _id: string;
  authorId: ObjectId;
  title: string;
  body: string;
  views: number;
  state: "Published" | "Draft";
  category: string;
  tags: string[];
  images: string[];
  animeName: string;
  createdAt: Date;
  updatedAt: Date;
}
