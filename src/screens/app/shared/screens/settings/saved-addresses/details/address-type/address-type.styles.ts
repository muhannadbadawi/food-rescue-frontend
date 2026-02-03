import { StyleSheet } from "react-native";

export const getStyles = (colors: any, isRTL: boolean) =>
  StyleSheet.create({
    row: {
      flexDirection: isRTL ? "row-reverse" : "row",
      flexWrap: "wrap",
      gap: 8,
    },
  });
