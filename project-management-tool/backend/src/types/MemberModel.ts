import type { ObjectId } from "mongoose";

export interface MemberModel {
  _id: string;
  userId: ObjectId;
  projectId: ObjectId;
  role: "Admin" | "Member";
  createdAt: Date;
  updatedAt: Date;
}
