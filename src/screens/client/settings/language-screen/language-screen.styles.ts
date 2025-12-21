import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      padding: 20,
      gap: 16,
    },

    languageRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      borderRadius: 12,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },

    leftContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    flag: {
      fontSize: 24,
    },

    languageText: {
      fontSize: 16,
      color: colors.textPrimary,
      fontWeight: "500",
    },

    radioCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: colors.mutedText,
      alignItems: "center",
      justifyContent: "center",
    },

    selectedRadio: {
      borderColor: colors.primary,
    },

    radioInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: colors.primary,
    },
  });
