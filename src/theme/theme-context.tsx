import React, { createContext, useContext, useState, useEffect } from "react";
import { DefaultColors } from "@/src/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the Theme type
type Theme = "light" | "dark";

// Define the context type
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Function to change the theme
};

// Create the Theme context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

const THEME_KEY = "APP_THEME"; // Key used in AsyncStorage

export const ThemeProvider = ({ children }: any) => {
  const [theme, setThemeState] = useState<Theme>("light");

  // Load the saved theme from AsyncStorage when the app starts
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") {
        setThemeState(savedTheme);
      }
    };
    loadTheme();
  }, []);

  // Function to change the theme and save it to AsyncStorage
  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme); // Update the state
    await AsyncStorage.setItem(THEME_KEY, newTheme); // Save the theme
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to get colors according to the current theme
export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return DefaultColors[theme];
};

// Hook to access the theme and the setTheme function
export const useThemeController = () => useContext(ThemeContext);
