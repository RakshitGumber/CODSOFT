import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export const generateTokens = async (email: string) => {
  if (!JWT_SECRET || !REFRESH_TOKEN_SECRET) {
    throw new Error("JWT secrets are not defined");
  }

  const accessToken = jwt.sign({ email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  const refreshToken = jwt.sign({ email }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
