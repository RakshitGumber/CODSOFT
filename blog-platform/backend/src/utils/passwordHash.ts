import bcryptjs from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  try {
    const hashedPassword = await bcryptjs.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    return null;
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  try {
    const isMatch = await bcryptjs.compare(password, hashedPassword);
    return { success: true, isMatch };
  } catch (error) {
    return { success: false };
  }
};
