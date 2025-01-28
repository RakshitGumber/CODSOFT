import { Schema, model } from "mongoose";
import { type ProjectModel } from "../types/ProjectModel";

const projectSchema = new Schema<ProjectModel>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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

export const Project = model<ProjectModel>("Projects", projectSchema);
