import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
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
import { User } from "@/src/constants/types";
import { getUserByUserId as apiGetUserByUserId } from "@/src/api/user-service";

type NavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "SettingsMain"
>;
type UserRole = "User" | "merchant";

type SettingsButton = {
  id: number;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  roles?: UserRole[];
};

// icon helper to reduce repetition
const Ion = (name: any, styles: any) => (
  <Ionicons name={name} size={24} style={styles.icon} />
);

const SettingsScreen = () => {
  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const navigation = useNavigation<NavigationProp>();
  const { logout, userRole } = useAuth();
  const { t } = useTranslation();
  const { userId } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const nav = useCallback(
    (screen: keyof SettingsStackParamList) => () => navigation.navigate(screen),
    [navigation],
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const userData = await apiGetUserByUserId(userId);
          setUser(userData);
        } catch (err) {
          console.error("Failed to fetch user", err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchUser();
  }, [userId]);

  const buttons: SettingsButton[] = useMemo(
    () => [
      {
        id: 0,
        title: t("settings.receipts"),
        icon: <Ionicons name="documents-sharp" size={24} style={styles.icon} />,
        onPress: nav(SettingScreens.Receipts),
        roles: ["User"],
      },
      {
        id: 1,
        title: t("settings.paymentMethod"),
        icon: <MaterialIcons name="payment" size={24} style={styles.icon} />,
        onPress: nav(SettingScreens.PaymentMethod),
        roles: ["User"],
      },
      {
        id: 2,
        title: t("settings.savedAddresses"),
        icon: Ion("location-outline", styles),
        onPress: nav(SettingScreens.SavedAddresses),
        roles: ["User"],
      },
      {
        id: 3,
        title: t("settings.country"),
        icon: Ion("globe-outline", styles),
        onPress: nav(SettingScreens.Country),
        roles: ["User"],
      },
      {
        id: 4,
        title: t("settings.theme"),
        icon: Ion("color-palette-outline", styles),
        onPress: nav(SettingScreens.ThemeScreen),
        roles: ["User", "merchant"],
      },
      {
        id: 5,
        title: t("settings.language"),
        icon: Ion("language-outline", styles),
        onPress: nav(SettingScreens.LanguageScreen),
        roles: ["User", "merchant"],
      },
      {
        id: 6,
        title: t("settings.logout"),
        icon: Ion("log-out-outline", styles),
        onPress: logout,
        roles: ["User", "merchant"],
      },
    ],
    [t, styles.icon, nav, logout],
  );

  const visibleButtons = useMemo(
    () =>
      buttons.filter(
        (btn) => !btn.roles || (userRole && btn.roles.includes(userRole)),
      ),
    [buttons, userRole],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: SettingsButton; index: number }) => (
      <TouchableOpacity
        style={[
          styles.buttonWrapper,
          index === 0 && styles.firstItem,
          index === visibleButtons.length - 1 && styles.lastItem,
        ]}
        onPress={item.onPress}
        activeOpacity={0.4}
      >
        {item.icon}
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    ),
    [styles, visibleButtons.length],
  );

  const renderHeader = useMemo(
    () => (
      <TouchableOpacity
        onPress={() => navigation.navigate(SettingScreens.EditProfile)}
      >
        <Profile user={user!} />
      </TouchableOpacity>
    ),
    [user, navigation],
  );

  return (
    <Screen loading={isLoading}>
      <FlatList
        data={visibleButtons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 20,
        }}
      />
    </Screen>
  );
};

export default SettingsScreen;
