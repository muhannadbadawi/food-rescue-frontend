import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserRole = "client" | "merchant";

type AuthContextType = {
  isLoggedIn: boolean;
  userRole?: UserRole;
  login: (userRole: UserRole) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const LOGIN_KEY = "IS_LOGGED_IN";
const ROLE_KEY = "USER_ROLE";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const loggedInValue = await AsyncStorage.getItem(LOGIN_KEY);
        const storedRole = await AsyncStorage.getItem(ROLE_KEY);
        if (loggedInValue === "true" && storedRole) {
          setIsLoggedIn(true);
          setUserRole(storedRole as UserRole);
        }
      } catch (err) {
        console.log("Error loading auth state:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAuth();
  }, []);

  const login = async (userRole: UserRole) => {
    setIsLoggedIn(true);
    setUserRole(userRole);
    await AsyncStorage.setItem(LOGIN_KEY, "true");
    await AsyncStorage.setItem(ROLE_KEY, userRole);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUserRole(undefined);
    await AsyncStorage.removeItem(LOGIN_KEY);
    await AsyncStorage.removeItem(ROLE_KEY);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
