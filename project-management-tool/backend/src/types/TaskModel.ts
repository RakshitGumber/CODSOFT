import { type ObjectId } from "mongoose";

export interface TaskModel {
  _id: string;
  name: string;
  description: string;
  status: "Todo" | "In Progress" | "Done";
  assigneeId: ObjectId;
  assignedId: ObjectId;
  epicId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
