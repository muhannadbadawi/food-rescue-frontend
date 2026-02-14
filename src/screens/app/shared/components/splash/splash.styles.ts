import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    logo: {
      width: 120,
      height: 120,
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      color: colors.text,
    },
  });
