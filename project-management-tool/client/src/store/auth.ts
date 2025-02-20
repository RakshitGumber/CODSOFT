import { create } from "zustand";
import Cookies from "js-cookie";
import { loginUser } from "@/api";

interface User {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  profilepic?: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  login: async (email, password) => {
    try {
      const response = await loginUser(email, password);
      const { accessToken, refreshToken, user } = response.data;

      localStorage.setItem("refreshToken", refreshToken);
      Cookies.set("accessToken", accessToken, { expires: 1 });

      set({ user, accessToken });
    } catch (error) {
      console.error("Login failed", error);
    }
  },

  logout: () => {
    localStorage.removeItem("refreshToken");
    Cookies.remove("accessToken");
    set({ user: null, accessToken: null });
  },

  isAuthenticated: () => {
    return !!Cookies.get("accessToken");
  },
}));
