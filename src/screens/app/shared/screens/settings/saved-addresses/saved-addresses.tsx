import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  Alert,
} from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./saved-addresses.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import EmptyScreen from "@/src/screens/app/shared/components/empty/empty";
import { savedAddresses } from "@/src/constants/mockData";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ClientSettingsStackParamList } from "../client-settings-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SavedAddress } from "@/src/constants/types";

type NavigationProp = NativeStackNavigationProp<
  ClientSettingsStackParamList,
  "SettingsMain"
>;

const SavedAddressesScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp>();
  const handleDelete = (id: number) => {
    Alert.alert(
      t("savedAddresses.deleteAddress"),
      t("savedAddresses.deleteConfirmation"),
      [
        { text: t("savedAddresses.cancel"), style: "cancel" },
        {
          text: t("savedAddresses.delete"),
          onPress: () => {
            console.log("Deleted address with id:", id);
          },
          style: "destructive",
        },
      ],
    );
  };
  const handleSetDefault = (id: number) => {
    console.log("Set default address with id:", id);
  };

  const renderItem: ListRenderItem<SavedAddress> = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Details", { address: item });
      }}
      onLongPress={() =>
        Alert.alert(
          t("savedAddresses.actions"),
          t("savedAddresses.chooseAction"),
          [
            { text: t("savedAddresses.cancel"), style: "cancel" },
            {
              text: t("savedAddresses.setDefault"),
              onPress: () => handleSetDefault(item.id),
              style: "default",
            },
            {
              text: t("savedAddresses.delete"),
              onPress: () => handleDelete(item.id),
              style: "destructive",
            },
          ],
        )
      }
    >
      <View style={styles.card}>
        <MaterialIcons
          name={
            item.type === "house"
              ? "home"
              : item.type === "apartment"
                ? "apartment"
                : "work"
          }
          size={24}
          color={colors.primary}
          style={styles.locationIcon}
        />

        <View style={styles.infoContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{item.addressLabel}</Text>
            {item.isDefault && (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultBadgeText}>
                  {t("savedAddresses.default")}
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.address}>{item.streetName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen
      showBackButton
      title={t("settings.savedAddresses")}
      rightSideComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              address: {
                id: 0,
                addressLabel: "",
                streetName: "",
                phoneNumber: "",
                houseName: "",
                type: "house",
                latitude: 32.1001,
                longitude: 36.091,
                isDefault: true,
              },
            });
          }}
        >
          <Ionicons
            name={"add-sharp"}
            size={24}
            color={colors.primary}
            style={{ width: 24 }}
          />
        </TouchableOpacity>
      }
    >
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
