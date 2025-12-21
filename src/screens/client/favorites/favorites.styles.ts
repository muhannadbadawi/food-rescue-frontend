import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    list: {
      flex: 1,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      padding: 12,
      marginBottom: 12,
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
    name: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.textPrimary,
    },
    details: {
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: 4,
    },
  });
