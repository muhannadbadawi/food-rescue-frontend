import api from "./api-client";

export const getUserByEmail = async (email: string) => {
  const response = await api.get("/api/Users/by-email", {
    params: { email },
  });

  return response.data;
};
