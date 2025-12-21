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
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
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
      backgroundColor: colors.primary,
      padding: 14,
      marginHorizontal: 16,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 8,
      marginBottom: 16,
    },
    addButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
