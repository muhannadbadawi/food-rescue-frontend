import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import { login as apiLogin, logout as apiLogout } from "@/src/api/auth-service";
import { LoginRequest, LoginResponse, Response } from "@/src/constants/types";
import Splash from "../app/shared/components/splash/splash";

type UserRole = "User" | "merchant";

interface JwtPayload {
  role: UserRole;
  userName: string;
  userId: string;
  [key: string]: any;
}

type AuthContextType = {
  isLoggedIn: boolean;
  userRole?: UserRole;
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
  login: (loginRequest: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    userRole: undefined as UserRole | undefined,
    userId: undefined as string | undefined,
    accessToken: undefined as string | undefined,
    refreshToken: undefined as string | undefined,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const storedAccessToken =
          await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
        const storedRefreshToken =
          await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);

        if (storedAccessToken) {
          const decoded: JwtPayload = jwtDecode(storedAccessToken);

          const isExpired = decoded.exp * 1000 < Date.now();

          if (isExpired) {
            await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
            await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
          } else {
            setAuthState({
              isLoggedIn: true,
              userId: decoded.userId,
              userRole: decoded.role,
              accessToken: storedAccessToken,
              refreshToken: storedRefreshToken || undefined,
            });
          }
        }
      } catch (err) {
        await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
        await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
        console.log("Error loading auth state:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAuth();
  }, []);

  const login = useCallback(async (loginRequest: LoginRequest) => {
    try {
      const response: Response<LoginResponse> = await apiLogin(loginRequest);
      if (!response.isSuccess) {
        throw new Error(response.message || "Login failed");
      }

      const token = response.data.accessToken;
      const refresh = response.data.refreshToken;
      const decoded: JwtPayload = jwtDecode(token);

      setAuthState({
        userId: decoded.userId,
        isLoggedIn: true,
        userRole: decoded.role,
        accessToken: token,
        refreshToken: refresh,
      });
      await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
      await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refresh);
    } catch (err) {
      console.log("Login error:", err);
      throw err;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiLogout();
    } catch (err) {
      console.log("Logout error:", err);
    } finally {
      setAuthState({
        userId: undefined,
        isLoggedIn: false,
        userRole: undefined,
        accessToken: undefined,
        refreshToken: undefined,
      });
      await Promise.all([
        SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY),
        SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY),
      ]);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      ...authState,
      login,
      logout,
      loading,
    }),
    [
      authState.isLoggedIn,
      authState.userRole,
      authState.accessToken,
      authState.refreshToken,
      authState.userId,
      login,
      logout,
      loading,
    ],
  );
  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <Splash /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
