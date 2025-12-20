import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      backgroundColor: colors.background,
    },

    icon: {
      marginBottom: 16,
      color: colors.mutedText,
    },

    title: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 8,
      textAlign: "center",
    },

    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      textAlign: "center",
      lineHeight: 20,
      marginBottom: 24,
    },
  });
