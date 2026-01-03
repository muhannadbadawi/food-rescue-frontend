import React, { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/src/theme/theme-context";
import { useAuth } from "@/src/screens/auth/auth-context";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import Profile from "../profile/profile";
import { SettingScreens } from "@/src/navigation/screens-type/setting-screens";
import { SettingsStackParamList } from "../settings-stack-param";
import { getStyles } from "./settings.styles";

type NavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "SettingsMain"
>;

type SettingsButton = {
  id: number;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  roles?: ("client" | "merchant")[];
};

const ProfileScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const navigation = useNavigation<NavigationProp>();
  const { logout, userRole } = useAuth();
  const { t } = useTranslation();

  const navigateTo = useCallback(
    (screen: keyof SettingsStackParamList) => () => navigation.navigate(screen),
    [navigation]
  );

  const buttons: SettingsButton[] = useMemo(
    () => [
      {
        id: 0,
        title: t("settings.receipts"),
        icon: <Ionicons name="documents-sharp" size={24} style={styles.icon} />,
        onPress: navigateTo(SettingScreens.Receipts),
        roles: ["client"],
      },
      {
        id: 1,
        title: t("settings.paymentMethod"),
        icon: <MaterialIcons name="payment" size={24} style={styles.icon} />,
        onPress: navigateTo(SettingScreens.PaymentMethod),
        roles: ["client"],
      },
      {
        id: 2,
        title: t("settings.savedAddresses"),
        icon: (
          <Ionicons name="location-outline" size={24} style={styles.icon} />
        ),
        onPress: navigateTo(SettingScreens.SavedAddresses),
        roles: ["client"],
      },
      {
        id: 3,
        title: t("settings.country"),
        icon: <Ionicons name="globe-outline" size={24} style={styles.icon} />,
        onPress: navigateTo(SettingScreens.Country),
        roles: ["client"],
      },
      {
        id: 4,
        title: t("settings.theme"),
        icon: (
          <Ionicons
            name="color-palette-outline"
            size={24}
            style={styles.icon}
          />
        ),
        onPress: navigateTo(SettingScreens.ThemeScreen),
        roles: ["client", "merchant"],
      },
      {
        id: 5,
        title: t("settings.language"),
        icon: (
          <Ionicons name="language-outline" size={24} style={styles.icon} />
        ),
        onPress: navigateTo(SettingScreens.LanguageScreen),
        roles: ["client", "merchant"],
      },
      {
        id: 6,
        title: t("settings.logout"),
        icon: <Ionicons name="log-out-outline" size={24} style={styles.icon} />,
        onPress: logout,
        roles: ["client", "merchant"],
      },
    ],
    [t, styles.icon, navigateTo, logout]
  );

  const visibleButtons = useMemo(
    () =>
      buttons.filter(
        (btn) => !btn.roles || (userRole && btn.roles.includes(userRole))
      ),
    [buttons, userRole]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: SettingsButton; index: number }) => {
      const isFirst = index === 0;
      const isLast = index === visibleButtons.length - 1;

      return (
        <TouchableOpacity
          style={[
            styles.buttonWrapper,
            isFirst && styles.firstItem,
            isLast && styles.lastItem,
          ]}
          onPress={item.onPress}
          activeOpacity={0.4}
        >
          {item.icon}
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    [styles, visibleButtons.length]
  );

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
        </View>

        <FlatList
          data={visibleButtons}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
};

export default ProfileScreen;
