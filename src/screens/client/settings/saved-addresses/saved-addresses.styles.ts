// src/screens/client/settings/saved-addresses/saved-addresses.styles.ts
import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    list: {
      padding: 16,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 20,
      padding: 20,
      marginBottom: 8,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5,
    },
    locationIcon: {
      marginRight: 12,
    },
    infoContainer: {
      flex: 1,
    },
    nameRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 4,
    },
    name: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.textPrimary,
    },
    address: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    defaultBadge: {
      backgroundColor: colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 12,
    },
    defaultBadgeText: {
      color: colors.onPrimary,
      fontSize: 12,
      fontWeight: "700",
    },
    actions: {
      flexDirection: "row",
      gap: 12,
    },
    iconButton: {
      padding: 4,
    },
  });
