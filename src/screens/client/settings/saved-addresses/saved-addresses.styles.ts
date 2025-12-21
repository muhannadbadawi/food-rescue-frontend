// src/screens/client/settings/saved-addresses/saved-addresses.styles.ts
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
    name: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.textPrimary,
      marginBottom: 4,
    },
    address: {
      fontSize: 14,
      color: colors.secondaryText,
    },
  });
