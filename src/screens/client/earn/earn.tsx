// src/screens/client/earn/earn.tsx
import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./earn.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import { earnings } from "@/src/constants/mockData";

const Earn = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const renderItem = ({
    item,
  }: {
    item: { id: number; date: string; amount: number };
  }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.amount}>
        {currentLang === "ar"
          ? `${item.amount.toFixed(2)}$`
          : `$${item.amount.toFixed(2)}`}
      </Text>
    </View>
  );

  return (
    <Screen title={t("tabs.earn")}>
      <FlatList
        data={earnings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Screen>
  );
};

export default Earn;
