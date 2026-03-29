import api from "./api-client";
import { User } from "@/src/constants/types";

export const getUserByEmail = async (email: string) => {
  const response = await api.get("/api/Users/by-email", {
    params: { email },
  });

  return response.data;
};

export const getUserByUserId = async (id: string) => {
  const response = await api.get(`/api/Users/${id}`);

  return response.data.data as User;
};
