import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 24,
      justifyContent: "center",
      backgroundColor: colors.background,
    },

    iconWrapper: {
      width: 96,
      height: 96,
      borderRadius: 48,
      backgroundColor: `${colors.primary}15`,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
      alignSelf: "center",
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
      marginBottom: 24,
      opacity: 0.7,
    },

    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
      marginBottom: 16,
      color: colors.textPrimary,
    },

    button: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: "center",
      marginBottom: 16,
    },

    buttonDisabled: {
      opacity: 0.5,
    },

    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },

    backButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
    },

    backText: {
      fontSize: 14,
      color: colors.primary,
      marginLeft: 4,
    },
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
      padding: 8,
    },
  });
