import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      backgroundColor: colors.background,
      alignItems: "center",
      padding: 20,
    },

    title: {
      fontSize: 22,
      fontWeight: "600",
      color: colors.textPrimary,
      textAlign: "center",
      marginBottom: 8,
    },

    subtitle: {
      fontSize: 14,
      color: colors.textPrimary,
      textAlign: "center",
      marginBottom: 32,
      opacity: 0.7,
    },

    otpContainer: {
      marginBottom: 32,
    },

    pinCodeContainer: {
      borderWidth: 1,
      borderRadius: 10,
      width: 48,
      height: 56,
      borderColor: colors.border,
      backgroundColor: colors.border,
    },

    pinCodeText: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.textPrimary,
    },

    button: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 16,
    },

    buttonDisabled: {
      opacity: 0.5,
    },

    buttonText: {
      color: colors.onPrimary,
      fontSize: 18,
      fontWeight: "bold",
    },

    forgotContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginTop: 10,
    },
    forgotText: {
      fontSize: 14,
      color: colors.textPrimary,
      fontWeight: "bold",
    },

    backButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginTop: 10,
    },

    backText: {
      fontSize: 14,
      color: colors.primary,
    },
  });
