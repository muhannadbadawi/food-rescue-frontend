import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    header: {
      flexDirection: "row",
    },
    buttonWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    firstItem: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    lastItem: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    buttonText: {
      color: colors.textPrimary,
      fontSize: 16,
      marginLeft: 12,
    },
    icon: {
      color: colors.textPrimary,
    },
  });
