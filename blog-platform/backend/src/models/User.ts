import { Schema, model } from "mongoose";
import { type UserModel } from "../types/UserModel";

const userSchema = new Schema<UserModel>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHashed: {
    type: String,
    required: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  fullname: {
    type: String,
    required: true,
  },
  profilepic: {
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

export const User = model<UserModel>("Users", userSchema);
