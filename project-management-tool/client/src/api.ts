import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const loginUser = (email: string, password: string) =>
  api.post("/auth/login", { email, password });

export const signupUser = (
  username: string,
  email: string,
  password: string,
  fullname: string
) => api.post("/auth/signup", { username, email, password, fullname });
