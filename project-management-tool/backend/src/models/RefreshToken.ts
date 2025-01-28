import mongoose from "mongoose";

const RefreshTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  expiresAt: { type: Date, required: true },
});

export const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);
