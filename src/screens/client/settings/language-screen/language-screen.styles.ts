import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    languageButton: {
      padding: 15,
      borderRadius: 8,
      backgroundColor: colors.card,
      marginBottom: 10,
    },
    selectedLanguage: {
      backgroundColor: colors.primary,
    },
    languageText: {
      fontSize: 16,
      color: colors.text,
      textAlign: "center",
    },
    selectedLanguageText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });
