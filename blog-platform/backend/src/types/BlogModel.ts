import type { ObjectId } from "mongoose";

export interface BlogModel {
  _id: string;
  authorId: ObjectId;
  title: string;
  body: string;
  state: "Published" | "Draft";
  createdAt: Date;
  updatedAt: Date;
}
