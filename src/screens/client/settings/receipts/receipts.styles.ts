// src/screens/client/settings/receipts/receipts.styles.ts
import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    list: {
      padding: 16,
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
    date: {
      fontSize: 14,
      color: colors.textPrimary,
      marginBottom: 4,
    },
    description: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.mutedText,
      marginBottom: 4,
    },
    amount: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.primary,
    },
  });
