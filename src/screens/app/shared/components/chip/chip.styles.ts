import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    chipContainer: {
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: colors.card,
      borderRadius: 16,
      alignSelf: "flex-start",
    },
    text: {
      color: colors.textPrimary,
      fontSize: 15,
    },
  });
