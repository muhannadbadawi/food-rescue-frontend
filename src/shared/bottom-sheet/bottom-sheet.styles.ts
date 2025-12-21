import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    wrapper: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
    },
    sheet: {
      position: "absolute",
      left: 0,
      right: 0,
      backgroundColor: colors.surface ?? colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 8,
      paddingHorizontal: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 12,
    },
    handleContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
    },
    handle: {
      width: 44,
      height: 5,
      borderRadius: 3,
      backgroundColor: colors.tabIconDefault,
    },
  });
