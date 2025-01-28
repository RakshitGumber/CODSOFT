import { User } from "@/models/User";
import jwt from "jsonwebtoken";

export default async (token: string) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === "object" && "email" in decoded) {
      const { email } = decoded;

      const user = await User.findOne({ email });

      if (!user) {
        return { message: "Invalid verification token" };
      }

      if (user.isEmailVerified) {
        return { message: "User already verified!" };
      }

      user.isEmailVerified = true;
      await user.save();

      return {
        success: true,
        message: "Email verified successfully",
      };
    }
    return { success: false, message: "Invalid verification token" };
  } catch (error) {
    return { success: false, message: "Invalid verification token", error };
  }
};
