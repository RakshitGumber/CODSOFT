import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = (data: {
  username: string;
  email: string;
  password: string;
  fullname: string;
}) => api.post("/auth/signup", data);

export const login = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);
