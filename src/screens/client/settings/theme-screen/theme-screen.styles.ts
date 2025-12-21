import { DefaultColors } from "@/src/constants/Colors";
import { StyleSheet, ViewStyle } from "react-native";
const containerBase: ViewStyle = {
  width: "100%",
  padding: 15,
  borderRadius: 8,
  borderWidth: 2.5,
  alignItems: "center",
  gap: 12,
};

const squareBase: ViewStyle = {
  borderRadius: 5,
  height: 15,
  width: 15,
};

const rectangleBase: ViewStyle = {
  borderRadius: 5,
  height: 9,
  width: "85%",
};

const buttonBase: ViewStyle = {
  borderRadius: 5,
  height: 10,
  width: 50,
};

export const getStyles = (colors: any) =>
  StyleSheet.create({
    screenContainer: {
      padding: 20,
      height: "100%",
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.textPrimary,
      marginBottom: 15,
    },
    themeButtonWrapper: {
      flex: 1,
      alignItems: "center",
      gap: 10,
    },
    row: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      flexDirection: "row",
      width: "100%",
    },
    darkContainer: {
      ...containerBase,
      backgroundColor: DefaultColors.dark.surface,
    },

    darkSquare: {
      ...squareBase,
      backgroundColor: colors.textMuted,
    },
    darkRectangle: {
      ...rectangleBase,
      backgroundColor: colors.textMuted,
    },
    darkButton: {
      ...buttonBase,
      backgroundColor: colors.primary,
    },

    lightContainer: {
      ...containerBase,
      backgroundColor: DefaultColors.light.surface,
    },
    lightSquare: {
      ...squareBase,
      backgroundColor: colors.textMuted,
    },
    lightRectangle: {
      ...rectangleBase,
      backgroundColor: colors.textMuted,
    },
    lightButton: {
      ...buttonBase,
      backgroundColor: colors.primary,
    },
    themeText: {
      fontSize: 16,
      color: colors.textPrimary,
      fontWeight: "bold",
    },
  });
