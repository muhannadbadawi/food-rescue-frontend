// src/screens/client/settings/saved-addresses/saved-addresses.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./saved-addresses.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import EmptyScreen from "@/src/shared/empty/empty";
import { savedAddresses } from "@/src/constants/mockData";

const SavedAddressesScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.name}>{item.name[currentLang]}</Text>
      <Text style={styles.address}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <Screen showBackButton title={t("settings.savedAddresses")}>
      {savedAddresses.length === 0 ? (
        <EmptyScreen />
      ) : (
        <FlatList
          data={savedAddresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </Screen>
  );
};

export default SavedAddressesScreen;
