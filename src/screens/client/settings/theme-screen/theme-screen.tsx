import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Screen from "@/src/shared/screen/screen";
import { useTheme, useThemeController } from "@/src/theme/theme-context";
import { getStyles } from "./theme-screen.styles";
import { useTranslation } from "react-i18next";

const ThemeScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  const { theme, setTheme } = useThemeController();

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <Screen showBackButton title={t("settings.theme")}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
          <Text style={styles.themeButtonText}>
            {theme === "light" ? t("settings.dark") : t("settings.light")}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default ThemeScreen;
