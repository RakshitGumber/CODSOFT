import { User } from "@/models/User";
import { generateTokens } from "@/utils/generateLoginTokens";
import { comparePassword } from "@/utils/passwordHash";

export default async (
  email: string,
  password: string
): Promise<ControllerData> => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        message: "user not found",
      };
    }
    const passwordMatch = await comparePassword(password, user.passwordHashed);
    if (!passwordMatch.success) {
      return {
        success: false,
        message: "invalid password",
      };
    }
    const { accessToken, refreshToken } = await generateTokens(email);
    return {
      success: true,
      message: "Login successful",
      data: {
        accessToken,
        refreshToken,
        user,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Error Login the user",
      error: error,
    };
  }
};
