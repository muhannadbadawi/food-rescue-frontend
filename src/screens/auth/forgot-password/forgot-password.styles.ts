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
      fontSize: 28,
      color: colors.textPrimary,
      fontWeight: "bold",
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      color: colors.textSecondary,
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
  });
