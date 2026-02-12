import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    buttonContainer: {
      // backgroundColor: colors.primary,
      // padding: 14,
      // marginHorizontal: 16,
      // borderRadius: 12,
      // alignItems: "center",
      // marginTop: 8,
      // marginBottom: 16,
      backgroundColor: colors.primary, // 80% opacity
      gap: 8,
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 16,
    },
    buttonText: {
      // color: "#fff",
      // fontWeight: "bold",
      // fontSize: 16,
      color: colors.onPrimary,
      fontSize: 14,
      fontWeight: "bold",
    },
  });
