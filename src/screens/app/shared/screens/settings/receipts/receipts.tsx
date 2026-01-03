import React, { useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./receipts.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import { receipts } from "@/src/constants/mockData";
import { Ionicons } from "@expo/vector-icons";
import EmptyScreen from "@/src/screens/app/shared/components/empty/empty";

const ReceiptsScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const totalAmount = useMemo(
    () => receipts.reduce((sum, r) => sum + r.amount, 0),
    []
  );

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.4}>
      <View style={styles.row}>
        <Ionicons name="receipt" size={24} color={colors.primary} />
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.description}>
            {item.description[currentLang]}
          </Text>
        </View>
        <Text style={styles.amount}>
          {currentLang === "ar" ? `${item.amount.toFixed(2)}$` : `$${item.amount.toFixed(2)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen showBackButton title={t("settings.receipts")}>
      {receipts.length === 0 ? (
        <EmptyScreen />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>{t("receipts.totalReceipts")}</Text>
            <Text style={styles.totalAmount}>
              {currentLang === "ar" ? `${totalAmount.toFixed(2)}$` : `$${totalAmount.toFixed(2)}`}
            </Text>
          </View>

          <FlatList
            data={receipts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Screen>
  );
};

export default ReceiptsScreen;
