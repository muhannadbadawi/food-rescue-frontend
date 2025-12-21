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

  const total = earnings.reduce((sum, e) => sum + e.amount, 0);

  const renderItem = ({
    item,
  }: {
    item: { id: number; date: string; amount: number };
  }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.subText}>{t("earn.daily")}</Text>
      </View>

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
        ListHeaderComponent={
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>{t("earn.totalEarnings")}</Text>
            <Text style={styles.summaryAmount}>${total.toFixed(2)}</Text>
          </View>
        }
      />
    </Screen>
  );
};

export default Earn;
