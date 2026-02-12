import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
        passwordContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.border,
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 10,
    },
    passwordInput: {
      flex: 1,
      height: 50,
      fontSize: 16,
      color: colors.textPrimary,
    },
    eyeIcon: {
      backgroundColor: "transparent",
      padding: 8,
    },
  });
