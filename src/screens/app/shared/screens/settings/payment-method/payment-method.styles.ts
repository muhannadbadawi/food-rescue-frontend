// src/screens/client/settings/payment-method/payment-method.styles.ts
import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    list: {
      padding: 16,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
    },
    defaultCard: {
      borderWidth: 2,
      borderColor: colors.primary,
    },
    type: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.textPrimary,
      marginBottom: 4,
    },
    details: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    cardIcon: {
      backgroundColor: "#fff",
      padding: 2,
      width: 45,
      height: 30,
    },
    addButton: {
      marginHorizontal: 16,
    },
  });
