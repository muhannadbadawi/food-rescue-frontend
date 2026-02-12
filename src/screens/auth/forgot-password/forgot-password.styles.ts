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
      textAlign: "center",
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
    backButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      gap: 10,
      marginTop: 10,
    },
    backButtonText: {
      fontSize: 14,
      color: colors.textPrimary,
      fontWeight: "bold",
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
  });
