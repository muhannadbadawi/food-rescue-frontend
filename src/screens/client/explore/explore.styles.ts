import { Dimensions, StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({

    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },

    sheetContent: {
      padding: 16,
    },

    shopName: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.textPrimary,
      marginBottom: 4,
    },

    shopDescription: {
      fontSize: 14,
      color: colors.textMuted,
      marginBottom: 8,
    },

    rating: {
      fontSize: 14,
      color: colors.primary,
      marginBottom: 4,
    },

    distance: {
      fontSize: 13,
      color: colors.textMuted,
      marginBottom: 8,
    },

    offersTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.textPrimary,
      marginTop: 8,
      marginBottom: 4,
    },

    offerItem: {
      fontSize: 13,
      color: colors.textMuted,
      marginLeft: 6,
    },

    emptyText: {
      textAlign: "center",
      color: colors.textMuted,
      fontSize: 16,
    },
  });
