import { Dimensions, StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    closeButton: {
      backgroundColor: "#FF3B30",
      padding: 12,
      borderRadius: 8,
      marginTop: 20,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    sheetText: {
      fontSize: 18,
      fontWeight: "600",
    },
  });
