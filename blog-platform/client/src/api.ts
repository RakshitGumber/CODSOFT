import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const { data } = await axios.post("https://your-api.com/refresh", {
          refreshToken,
        });

        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refreshToken);

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token expired, logging out...");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/auth/login"; // Redirect to login if refresh fails
      }
    }
    return Promise.reject(error);
  }
);

export const signup = (data: {
  username: string;
  email: string;
  password: string;
  fullname: string;
}) => api.post("/auth/signup", data);

export const login = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const createBlog = (data: {
  title: string;
  body: string;
  authorId: string;
}) => api.post("/blog", data);
export const getBlog = () => api.get("/blog");
