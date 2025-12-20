import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
    },
    headerTitle: {
      color: colors.text,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      flex: 1, 
    },
  });
