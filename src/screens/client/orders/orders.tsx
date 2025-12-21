import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./orders.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";

const Order = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <Screen>
      <Text>Order works 🚀</Text>
    </Screen>
  );
};

export default Order;
