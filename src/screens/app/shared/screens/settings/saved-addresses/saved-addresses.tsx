import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./saved-addresses.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import EmptyScreen from "@/src/screens/app/shared/components/empty/empty";
import { savedAddresses } from "@/src/constants/mockData";
import { MaterialIcons } from "@expo/vector-icons";

const SavedAddressesScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  const renderItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.card}>
        <MaterialIcons
          name="location-on"
          size={24}
          color={colors.primary}
          style={styles.locationIcon}
        />

        <View style={styles.infoContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{item.name[currentLang]}</Text>
            {item.isDefault && (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultBadgeText}>
                  {t("savedAddresses.default")}
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.address}>{item.address}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="edit" size={20} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="delete" size={20} color={colors.error} />
          </TouchableOpacity>
        </View>
      </View>
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
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      )}
    </Screen>
  );
};

export default SavedAddressesScreen;
