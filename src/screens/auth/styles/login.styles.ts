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
    logo: {
      width: "50%",
      height: 80,
      marginBottom: 30,
    },
    title: {
      fontSize: 28,
      color: colors.text,
      fontWeight: "bold",
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      color: colors.secondaryText,
      marginBottom: 24,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: colors.border,
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 16,
      color: colors.text,
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
    buttonText: {
      color: colors.primaryText,
      fontSize: 18,
      fontWeight: "bold",
    },
    forgotText: {
      color: colors.tint,
      fontSize: 14,
    },
    registerContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    registerText: {
      fontSize: 14,
      color: colors.text,
    },
    registerLink: {
      fontSize: 14,
      color: colors.tint,
      fontWeight: "bold",
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
      color: colors.text,
    },
    eyeIcon: {
      padding: 8,
    },
  });
