import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";

interface AvatarStylesProps {
  size: number;
  glowColor: string;
  backgroundColor: string;
}

export const getAvatarStyles = ({
  size,
  glowColor,
  backgroundColor,
}: AvatarStylesProps) =>
  StyleSheet.create({
    glowWrapper: {
      width: size,
      height: size,
      borderRadius: size / 2,
      shadowColor: glowColor,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
      backgroundColor: glowColor,
      alignItems: "center",
      justifyContent: "center",
    } as ViewStyle,
    innerWrapper: {
      width: size - 4,
      height: size - 4,
      borderRadius: (size - 4) / 2,
      overflow: "hidden",
      backgroundColor: backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    } as ViewStyle,
    letter: {
      color: "#fff",
      fontSize: size * 0.4,
      fontWeight: "600",
    } as TextStyle,
    image: {
      width: "100%",
      height: "100%",
    } as ImageStyle,
  });
