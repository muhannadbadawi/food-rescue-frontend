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

  const languages: Array<{ code: "ar" | "en"; label: string }> = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  const handleChangeLanguage = (code: "ar" | "en") => {
    if (i18n.language !== code) {
      changeLanguage(code);
    }
  };

  return (
    <Screen showBackButton title={t("settings.language")}>
      <View style={styles.container}>
        {languages.map((lang) => {
          const isSelected = i18n.language === lang.code;
          return (
            <TouchableOpacity
              key={lang.code}
              style={styles.languageRow}
              onPress={() => handleChangeLanguage(lang.code)}
            >
              <View style={[styles.radioCircle, isSelected && styles.selectedRadio]}>
                {isSelected && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.languageText}>{lang.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Screen>
  );
};

export default LanguageScreen;
