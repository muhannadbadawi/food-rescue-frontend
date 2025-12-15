import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 4,
      color: colors.text, 
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
      color: colors.text, 
      marginBottom: 16,
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
    loginContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    loginText: {
      fontSize: 14,
      color: colors.text, 
    },
    loginLink: {
      fontSize: 14,
      color: colors.tint, 
      fontWeight: "bold",
    },
  });
