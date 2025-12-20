import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "./screen.styles";

const Screen = ({
  children,
  showBackButton = false,
  title,
  style,
}: {
  children?: React.ReactNode;
  showBackButton?: boolean;
  title?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.headerContainer}></View>
      {children}
    </SafeAreaView>
  );
};
export default Screen;
