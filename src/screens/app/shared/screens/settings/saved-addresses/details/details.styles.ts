import { StyleSheet } from "react-native";
import i18n from "@/src/localization/i18n";

export const getStyles = (colors: any, isRTL: boolean) =>
  StyleSheet.create({
    container: {
      padding: 16,
    },

    row: {
      flexDirection: isRTL ? "row-reverse" : "row",
      flexWrap: "wrap",
      gap: 8,
    },

    label: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 4,
    },

    value: {
      fontSize: 16,
      color: colors.text,
      marginBottom: 12,
    },

    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      color: colors.text,
      marginBottom: 12,
    },

    saveButton: {
      marginTop: 20,
      backgroundColor: colors.primary,
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: "center",
    },

    saveText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
  });
