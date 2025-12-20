import axios from "axios";

const API_BASE_URL = "https://food-rescue-backend-python.onrender.com"; // replace with your actual backend URL

export interface RegisterData {
  email: string;
  phone_number: string;
  password: string;
}

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/register`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const login = async (email: string, password: string) => {
  console.log("password: ", password);
  console.log("email: ", email);
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/login`,
      {}, // empty body
      {
        params: {
          email,
          password,
        },
      }
    );
    console.log("response.data: ", response.data);

    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};
