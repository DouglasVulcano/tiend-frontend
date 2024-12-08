import api from "./api";
import axios from "axios";
import { LoginResponse, UserResponse } from "../types/auth";

const authApi = axios.create({
  baseURL: "/auth",
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await authApi.post<LoginResponse>("/login", {
      email,
      password,
    });
    return response.data;
  },

  register: async (username: string, email: string, password: string, confirmPassword: string) => {
    const response = await authApi.post("/register", {
      username,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  },

  getMe: async () => {
    const response = await api.get<UserResponse>("/me");
    return response.data;
  },
};
