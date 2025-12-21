import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    list: {
      padding: 16,
    },
    totalContainer: {
      backgroundColor: colors.cardBackground,
      margin: 16,
      padding: 16,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    totalLabel: {
      fontSize: 14,
      color: colors.textMuted,
    },
    totalAmount: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.primary,
      marginTop: 4,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    date: {
      fontSize: 14,
      color: colors.textPrimary,
      marginBottom: 4,
    },
    description: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.textMuted,
    },
    amount: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.primary,
    },
  });
