import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { login as apiLogin, logout as apiLogout } from "@/src/api/auth-service";
import { LoginRequest, LoginResponse, Response } from "@/src/constants/types";

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
  login: (loginRequest: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

const LOGIN_KEY = "IS_LOGGED_IN";
const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const storedAccessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
        const storedRefreshToken =
          await AsyncStorage.getItem(REFRESH_TOKEN_KEY);

        if (storedAccessToken) {
          setAccessToken(storedAccessToken);
          setRefreshToken(storedRefreshToken || undefined);
          setIsLoggedIn(true);

          // decode JWT to get role
          const decoded: JwtPayload = jwtDecode(storedAccessToken);
          setUserRole(decoded.role);
        }
      } catch (err) {
        console.log("Error loading auth state:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAuth();
  }, []);

  const login = async (loginRequest: LoginRequest) => {
    try {
      const response: Response<LoginResponse> = await apiLogin(loginRequest);
      if (!response.isSuccess) {
        throw new Error(response.message || "Login failed");
      }
      const token = response.data.accessToken;
      const refresh = response.data.refreshToken;

      setAccessToken(token);
      setRefreshToken(refresh);
      setIsLoggedIn(true);

      // decode role from token
      const decoded: JwtPayload = jwtDecode(token);
      console.log("decoded: ", decoded);
      setUserRole(decoded.role);

      // save to AsyncStorage
      await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
      await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refresh);
    } catch (err) {
      console.log("Login error:", err);
      throw err;
    }
  };

  const logout = async () => {
    apiLogout()
      .then(async () => {
        setIsLoggedIn(false);
        setUserRole(undefined);
        setAccessToken(undefined);
        setRefreshToken(undefined);
        await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY]);
      })
      .catch((err) => {
        console.log("Logout error:", err);
      });
  };

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userRole,
        accessToken,
        refreshToken,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
