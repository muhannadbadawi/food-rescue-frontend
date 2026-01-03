// src/screens/client/favorites/favorites.tsx
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./favorites.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import { favorites } from "@/src/constants/mockData";

const Favorites = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const renderItem = ({
    item,
  }: {
    item: {
      id: number;
      name: { ar: string; en: string };
      rating: number;
      distance: string;
      image: any;
    };
  }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name[currentLang]}</Text>
        <Text style={styles.details}>
          ⭐ {item.rating} • {item.distance}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen title={t("tabs.favorites")}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Screen>
  );
};

export default Favorites;
