import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.textPrimary,
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    list: {
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 12,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 12,
      marginRight: 12,
    },
    info: {
      flex: 1,
    },
    item: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.textPrimary,
    },
    details: {
      fontSize: 14,
      color: colors.secondaryText,
      marginTop: 4,
    },
    date: {
      fontSize: 12,
      color: colors.secondaryText,
      marginTop: 2,
    },
  });
