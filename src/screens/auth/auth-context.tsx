import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<any>(null);
const LOGIN_KEY = "IS_LOGGED_IN";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(LOGIN_KEY).then((value) => {
      if (value === "true") setIsLoggedIn(true);
      setLoading(false);
    });
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    AsyncStorage.setItem(LOGIN_KEY, "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    AsyncStorage.removeItem(LOGIN_KEY);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
