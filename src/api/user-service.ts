import axios from "axios";
import CONFIG from "@/config";
import { LoginRequest, Response, LoginResponse } from "@/src/constants/types";
export interface RegisterData {
  email: string;
  phone_number: string;
  password: string;
}

export const getUserByEmail = async (email: string) => {
  try {
    const response = await axios.get(`${CONFIG.API_URL}/api/Users/by-email`, {
      params: { email },
      //read access token from cookies and include in request
      withCredentials: true,
    });

    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post(
      `${CONFIG.API_URL}/api/auth/register`,
      data,
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const login = async (
  loginRequest: LoginRequest,
): Promise<Response<LoginResponse>> => {
  try {
    const { data } = await axios.post<Response<LoginResponse>>(
      `${CONFIG.API_URL}/api/Auth/login`,
      loginRequest,
    );
    console.log("Login response: ", data);
    return data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const logout = async () => {
  try {
    await axios.post(`${CONFIG.API_URL}/api/Auth/logout`, null, {
      withCredentials: true,
    });
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};