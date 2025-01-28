import { Schema, model } from "mongoose";
import { type EpicModel } from "../types/EpicModel";

const epicSchema = new Schema<EpicModel>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Projects",
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

export const Epic = model<EpicModel>("Epics", epicSchema);
