import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    shopOwnerContainer: {
      width: "100%",
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.textPrimary,
      marginBottom: 12,
      textAlign: "left",
      width: "100%",
    },
    mapButtons: {
      position: "absolute",
      bottom: 40,
      left: 20,
      right: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    mapBtn: {
      backgroundColor: "#fff",
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
    },
    mapBtnPrimary: {
      backgroundColor: "#007aff",
    },
    mapBtnTxt: {
      color: "#000",
      fontWeight: "600",
    },
    mapBtnTxtLight: {
      color: "#fff",
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      width: "100%",
    },
    avatarWrap: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: colors.primary,
      borderStyle: "dashed",
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    hint: {
      marginTop: 6,
      fontSize: 12,
      color: colors.textSecondary,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: colors.background,
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colors.textPrimary,
      marginBottom: 14,
      borderWidth: 1,
      borderColor: colors.inputBorder,
    },
    mapTrigger: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.background,
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      marginBottom: 14,
    },
    mapTriggerTxt: {
      marginLeft: 8,
      fontSize: 14,
      color: colors.textPrimary,
    },
  });
