import React from "react";
import { Image, View, ActivityIndicator, Text } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./splash.styles";
import { useTranslation } from "react-i18next";

const Splash = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/src/assets/FoodRescueLogo.png")}
        style={styles.logo}
      />
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{t("common.loading")}</Text>
    </View>
  );
};

export default Splash;
