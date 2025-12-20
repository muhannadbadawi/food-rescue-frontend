import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Screen from "@/src/shared/screen/screen";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./language-screen.styles";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/src/localization/i18n";

const LanguageScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    changeLanguage(nextLang);
  };

  return (
    <Screen showBackButton title={t("settings.language")}>
      <View style={styles.container}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageButton,
              i18n.language === lang.code && styles.selectedLanguage,
            ]}
            onPress={() => toggleLanguage()}
          >
            <Text
              style={[
                styles.languageText,
                i18n.language === lang.code && styles.selectedLanguageText,
              ]}
            >
              {lang.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  );
};

export default LanguageScreen;
