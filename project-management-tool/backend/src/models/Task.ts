import { Schema, model } from "mongoose";
import { type TaskModel } from "../types/TaskModel";

const taskSchema = new Schema<TaskModel>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Todo", "In Progress", "Done"],
    default: "Todo",
  },
  assigneeId: {
    type: Schema.Types.ObjectId,
    ref: "Members",
  },
  assignedId: {
    type: Schema.Types.ObjectId,
    ref: "Members",
  },
  epicId: {
    type: Schema.Types.ObjectId,
    ref: "Epics",
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

export const Task = model<TaskModel>("Tasks", taskSchema);
