// src/api/api-client.ts
import axios from "axios";
import CONFIG from "@/config";

const api = axios.create({
  baseURL: CONFIG.API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: any[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: any) => {
  refreshSubscribers.push(callback);
};

// 🔹 Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const { data } = await axios.post(
            `${CONFIG.API_URL}/api/Auth/refresh`,
            null,
            { withCredentials: true }
          );

          isRefreshing = false;
          onRefreshed(data.accessToken);
        } catch (refreshError) {
          isRefreshing = false;
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((token: string) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(api(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default api;
