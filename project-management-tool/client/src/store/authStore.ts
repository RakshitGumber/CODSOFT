import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  accesToken: null,
  refreshToken: null,
  setUser: (user: any) => set({ user }),
  setAccessToken: (token: string) => set({ accessToken: token }),
  setRefreshToken: (token: string) => set({ refreshToken: token }),
  logout: () => set({ user: null, accessToken: null, refreshToken: null }),
}));
