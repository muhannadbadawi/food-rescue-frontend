// src/screens/client/orders/orders.tsx
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./orders.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import { orders } from "@/src/constants/mockData";

const Orders = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const renderItem = ({
    item,
  }: {
    item: {
      id: number;
      item: { ar: string; en: string };
      date: string;
      status: { ar: string; en: string };
      price: number;
      quantity: number;
      image: any;
    };
  }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.item}>{item.item[currentLang]}</Text>
        <Text style={styles.details}>
          {item.quantity} × {item.price.toFixed(2)} • {item.status[currentLang]}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen title={t("tabs.orders")}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Screen>
  );
};

export default Orders;
