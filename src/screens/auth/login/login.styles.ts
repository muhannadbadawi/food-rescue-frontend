import { StyleSheet } from "react-native";
export const getStyles = (colors: any) =>
  StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      padding: 20,
    },
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: "50%",
      height: 80,
      marginBottom: 30,
    },
    title: {
      fontSize: 25,
      color: colors.textPrimary,
      fontWeight: "bold",
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 15,
      color: colors.textSecondary,
      marginBottom: 24,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: colors.background,
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 15,
      marginBottom: 16,
      color: colors.textPrimary,
    },
    button: {
      backgroundColor: colors.primary, // 80% opacity
      gap: 8,
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 16,
    },
    buttonText: {
      color: colors.onPrimary,
      fontSize: 14,
      fontWeight: "bold",
    },
    forgotText: {
      color: colors.primary,
      fontSize: 14,
    },
    registerContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    registerText: {
      fontSize: 14,
      color: colors.textPrimary,
    },
    registerLink: {
      fontSize: 14,
      color: colors.primary,
      fontWeight: "bold",
    },
    passwordContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.background,
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 10,
    },
    passwordInput: {
      flex: 1,
      height: 50,
      fontSize: 15,
      color: colors.textPrimary,
    },
    eyeIcon: {
      padding: 8,
    },
    topBar: {
      width: "100%",
      flexDirection: "row",
    },
    orText: {
      color: colors.textSecondary,
      textAlign: "center",
      fontSize: 20,
    },
    linksRow: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    card: {
      width: "100%",
      backgroundColor: colors.card + "AA",
      borderRadius: 12,
      padding: 20,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    languageToggle: {
      fontSize: 18,
      color: colors.primary,
      fontWeight: "bold",
      marginBottom: 20,
    },
  });
