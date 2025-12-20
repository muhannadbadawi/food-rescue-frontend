import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      borderTopColor: colors.border,
    },
    headerLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    avatarName: {
      marginLeft: 12,
      fontSize: 18,
      fontWeight: "600",
      color: colors.text,
    },
    buttonWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginVertical: 4,
      backgroundColor: colors.card, // optional card background
    },
    buttonText: {
      color: colors.text,
      fontSize: 16,
      marginLeft: 12,
    },
    icon: {
      color: colors.text,
    },
  });
