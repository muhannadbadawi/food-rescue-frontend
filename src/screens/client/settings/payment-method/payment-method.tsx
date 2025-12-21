// src/screens/client/settings/payment-method/payment-method.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./payment-method.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import EmptyScreen from "@/src/shared/empty/empty";
import { paymentMethods } from "@/src/constants/mockData";

const PaymentMethodScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.details}>
        • {t("payment.last4")}: {item.last4} • {t("payment.expiry")}: {item.expiry}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Screen showBackButton title={t("payment.paymentMethod")}>
      {paymentMethods.length === 0 ? (
        <EmptyScreen />
      ) : (
        <FlatList
          data={paymentMethods}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </Screen>
  );
};

export default PaymentMethodScreen;
