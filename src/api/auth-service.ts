import { LoginRequest } from "../constants/types";
import api from "./api-client";

const AUTH_BASE = "Auth";

export const login = async (data: LoginRequest) => {
  const response = await api.post(`/api/${AUTH_BASE}/login`, data);
  return response.data;
};

export const logout = async () => {
  await api.post(`/api/${AUTH_BASE}/logout`);
};

export const register = async (data: any) => { //data: RegisterData
  const response = await api.post(`/api/${AUTH_BASE}/register`, data);
  return response.data;
};
