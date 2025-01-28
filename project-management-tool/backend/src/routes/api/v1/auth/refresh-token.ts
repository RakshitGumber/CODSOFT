import type { Request, Response } from "express";

import jwt from "jsonwebtoken";
import { RefreshToken } from "@/models/RefreshToken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "your_refresh_secret_key";

export default async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // Generate a new access token
    if (typeof decoded === "object" && "email" in decoded) {
      const accessToken = jwt.sign({ email: decoded.email }, JWT_SECRET, {
        expiresIn: "15m",
      });

      res.json({ accessToken });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token" });
  }
};
