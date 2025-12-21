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

  const toggleTheme = (nextTheme: "dark" | "light") => {
    if (theme === nextTheme) return;
    setTheme(nextTheme);
  };

  return (
    <Screen showBackButton title={t("settings.theme")}>
      <View style={styles.screenContainer}>
        <Text style={styles.headerText}>{t("theme.chooseYourTheme")}</Text>
        <View style={styles.container}>
          <View style={styles.themeButtonWrapper}>
            <TouchableOpacity
              style={[
                styles.darkContainer,
                theme === "dark" && { borderColor: colors.primary },
              ]}
              onPress={() => toggleTheme("dark")}
            >
              <View style={styles.row}>
                <View style={styles.darkSquare} />
                <View style={styles.darkRectangle} />
              </View>
              <View style={styles.row}>
                <View style={styles.darkSquare} />
                <View style={styles.darkRectangle} />
              </View>
              <View style={styles.row}>
                <View style={styles.darkButton} />
              </View>
            </TouchableOpacity>
            <Text style={styles.themeText}>{t("theme.dark")}</Text>
          </View>

          <View style={styles.themeButtonWrapper}>
            <TouchableOpacity
              style={[
                styles.lightContainer,
                theme === "light" && { borderColor: colors.primary },
              ]}
              onPress={() => toggleTheme("light")}
            >
              <View style={styles.row}>
                <View style={styles.lightSquare} />
                <View style={styles.lightRectangle} />
              </View>
              <View style={styles.row}>
                <View style={styles.lightSquare} />
                <View style={styles.lightRectangle} />
              </View>
              <View style={styles.row}>
                <View style={styles.lightButton} />
              </View>
            </TouchableOpacity>
            <Text style={styles.themeText}>{t("theme.light")}</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default ThemeScreen;
