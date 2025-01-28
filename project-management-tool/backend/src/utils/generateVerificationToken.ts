import jwt from "jsonwebtoken";

export const genrateVerificationToken = async (email: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
