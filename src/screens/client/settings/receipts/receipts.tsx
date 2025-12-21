// src/screens/client/settings/receipts/receipts.tsx
import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./receipts.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import { receipts } from "@/src/constants/mockData";
import EmptyScreen from "@/src/shared/empty/empty";

const ReceiptsScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description[currentLang]}</Text>
      <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
    </View>
  );

  return (
    <Screen showBackButton title={t("settings.receipts")}>
      {receipts.length === 0 ? (
        <EmptyScreen />
      ) : (
        <FlatList
          data={receipts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </Screen>
  );
};

export default ReceiptsScreen;
