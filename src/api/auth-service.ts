import { LoginRequest } from "../constants/types";
import api from "./api-client";

export const login = async (data: LoginRequest) => {
  const response = await api.post("/api/Auth/login", data);
  return response.data;
};

export const logout = async () => {
  await api.post("/api/Auth/logout");
};

export const register = async (data: any) => { //data: RegisterData
  const response = await api.post("/api/Users", data);
  return response.data;
};
