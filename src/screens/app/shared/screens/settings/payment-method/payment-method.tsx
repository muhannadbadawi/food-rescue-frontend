// src/screens/client/settings/payment-method/payment-method.tsx
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./payment-method.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import EmptyScreen from "@/src/screens/app/shared/components/empty/empty";
import { paymentMethods } from "@/src/constants/mockData";
import Button from "@/src/screens/app/shared/components/button/button";

const cardIcons: Record<string, any> = {
  Visa: require("@/src/assets/cards/Visa.jpg"),
  MasterCard: require("@/src/assets/cards/Mastercard.jpg"),
  PayPal: require("@/src/assets/cards/PayPal.jpg"),
  CliQ: require("@/src/assets/cards/CliQ.png"),
  ApplePay: require("@/src/assets/cards/ApplePay.jpg"),
};

const PaymentMethodScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [defaultCardId, setDefaultCardId] = useState<number | null>(
    paymentMethods.length ? paymentMethods[0].id : null,
  );

  const renderItem = ({ item }: any) => {
    const isDefault = defaultCardId === item.id;

    return (
      <TouchableOpacity
        style={[styles.card, isDefault && styles.defaultCard]}
        onPress={() => setDefaultCardId(item.id)}
      >
        <View style={styles.row}>
          <Image
            source={cardIcons[item.type] || cardIcons.Visa}
            style={styles.cardIcon}
            resizeMode="contain"
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.type}>
              {item.type} {isDefault ? `(${t("payment.default")})` : ""}
            </Text>
            <Text style={styles.details}>
              • {t("payment.last4")}: {item.last4} • {t("payment.expiry")}:
              {item.expiry}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
      <Button text={t("payment.addNew")} style={styles.addButton} />
    </Screen>
  );
};

export default PaymentMethodScreen;
