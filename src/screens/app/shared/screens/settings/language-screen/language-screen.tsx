import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./language-screen.styles";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/src/localization/i18n";

const LanguageScreen = () => {
  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const { t, i18n } = useTranslation();

  const languages: Array<{ code: "ar" | "en"; label: string; flag: string }> = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ar", label: "العربية", flag: "🇯🇴" },
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
              activeOpacity={0.7}
            >
              <View style={styles.leftContent}>
                <Text style={styles.flag}>{lang.flag}</Text>
                <Text style={styles.languageText}>{lang.label}</Text>
              </View>

              <View
                style={[styles.radioCircle, isSelected && styles.selectedRadio]}
              >
                {isSelected && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Screen>
  );
};

export default LanguageScreen;
