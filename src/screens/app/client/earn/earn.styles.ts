import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    list: {
      paddingHorizontal: 16,
      paddingBottom: 20,
    },

    summaryCard: {
      backgroundColor: colors.primary,
      borderRadius: 14,
      padding: 20,
      marginBottom: 24,
    },

    summaryLabel: {
      color: colors.onPrimary,
      fontSize: 14,
      opacity: 0.9,
    },

    summaryAmount: {
      color: colors.onPrimary,
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 6,
    },

    card: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 14,
      marginBottom: 12,
    },

    date: {
      fontSize: 14,
      color: colors.textSecondary,
    },

    subText: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 2,
    },

    amount: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.success,
    },
  });
