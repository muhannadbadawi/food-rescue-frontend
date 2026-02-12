import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: colors.primary,
      gap: 8,
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 8,
      width: "auto",
      alignItems: "center"
    },
    buttonText: {
      color: colors.onPrimary,
      fontSize: 14,
      fontWeight: "bold",
    },
  });
