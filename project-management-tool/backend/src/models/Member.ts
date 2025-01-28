import { Schema, model } from "mongoose";
import { type MemberModel } from "../types/MemberModel";

const memberSchema = new Schema<MemberModel>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member",
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

export const Member = model<MemberModel>("Members", memberSchema);
