import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: "center",
    },

    card: {
      width: "100%",
      backgroundColor: colors.surface,
      borderRadius: 16,
      paddingVertical: 24,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },

    avatar: {
      width: 90,
      height: 90,
      borderRadius: 45,
      marginBottom: 16,
    },

    name: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.textPrimary,
      marginBottom: 4,
    },

    email: {
      fontSize: 14,
      color: colors.mutedText,
    },
  });
