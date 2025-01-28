import type { ObjectId } from "mongoose";

export interface EpicModel {
  _id: string;
  projectId: ObjectId;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
