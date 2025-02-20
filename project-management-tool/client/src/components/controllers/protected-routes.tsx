import { useAuthStore } from "@/store/auth";
import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.history.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null;
};
