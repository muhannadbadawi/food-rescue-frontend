import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    languageRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    radioCircle: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },
    selectedRadio: {
      borderColor: colors.primary,
    },
    radioInner: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: colors.primary,
    },
    languageText: {
      fontSize: 16,
      color: colors.textPrimary,
    },
  });
