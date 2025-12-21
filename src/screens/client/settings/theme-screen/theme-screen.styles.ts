import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    themeButton: {
      padding: 15,
      borderRadius: 8,
      backgroundColor: colors.card,
      alignItems: "center",
    },
    themeButtonText: {
      fontSize: 16,
      color: colors.textPrimary,
      fontWeight: "bold",
    },
  });
