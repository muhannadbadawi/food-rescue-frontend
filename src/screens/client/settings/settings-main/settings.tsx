import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Avatar from "@/src/shared/avatar/avatar";
import { useTheme, useThemeController } from "@/src/theme/theme-context";
import { getStyles } from "./settings.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "@/src/localization/i18n";
import { SettingsStackParamList } from "../settings-stack";
import { useAuth } from "@/src/screens/auth/auth-context";
import { SettingScreens } from "@/src/navigation/screens-type/setting-screens";
import Screen from "@/src/shared/screen/screen";

type LocalNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "SettingsMain"
>;

const ProfileScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const localNavigation = useNavigation<LocalNavigationProp>();
  const { logout } = useAuth();
  const { t } = useTranslation();

  const goToProfile = () => {
    localNavigation.navigate(SettingScreens.Profile);
  };
  const goToReceipts = () => {
    localNavigation.navigate(SettingScreens.Receipts);
  };

  const goToPaymentMethod = () => {
    localNavigation.navigate(SettingScreens.PaymentMethod);
  };
  const goToSavedAddresses = () => {
    localNavigation.navigate(SettingScreens.SavedAddresses);
  };
  const goToLanguageScreen = () => {
    localNavigation.navigate(SettingScreens.LanguageScreen);
  };
  const goToThemeScreen = () => {
    localNavigation.navigate(SettingScreens.ThemeScreen);
  };
  const goToCountry = () => {
    localNavigation.navigate(SettingScreens.Country);
  };

  const onLogout = () => {
    logout(false);
  };

  const buttons = [
    {
      id: 0,
      title: t("settings.receipts"),
      icon: <Ionicons name={"documents-sharp"} size={24} style={styles.icon} />,
      onClick: () => {
        goToReceipts();
      },
    },
    {
      id: 1,
      title: t("settings.paymentMethod"),
      icon: <MaterialIcons name="payment" size={24} style={styles.icon} />,
      onClick: () => {
        goToPaymentMethod();
      },
    },
    {
      id: 2,
      title: t("settings.savedAddresses"),
      icon: (
        <Ionicons name={"location-outline"} size={24} style={styles.icon} />
      ),
      onClick: () => {
        goToSavedAddresses();
      },
    },
    {
      id: 3,
      title: t("settings.country"),
      icon: <Ionicons name={"globe-outline"} size={24} style={styles.icon} />,
      onClick: () => {
        goToCountry();
      },
    },
    {
      id: 4,
      title: t("settings.theme"),
      icon: (
        <Ionicons
          name={"color-palette-outline"}
          size={24}
          style={styles.icon}
        />
      ),
      onClick: () => goToThemeScreen(),
    },
    {
      id: 5,
      title: t("settings.language"),
      icon: (
        <Ionicons name={"language-outline"} size={24} style={styles.icon} />
      ),
      onClick: () => goToLanguageScreen(),
    },
    {
      id: 6,
      title: t("settings.logout"),
      icon: <Ionicons name={"log-out-outline"} size={24} style={styles.icon} />,
      onClick: () => onLogout(),
      isLogout: true,
    },
  ];

  return (
    <Screen>
      <View style={styles.container}>
        {/* Header */}
        <TouchableOpacity onPress={goToProfile}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Avatar name="Mohannad Badawi" />
              <Text style={styles.avatarName}>Mohannad Badawi</Text>
            </View>
            <View>
              <Ionicons
                name="pencil-outline"
                size={24}
                color={colors.textPrimary}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Buttons */}
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn.id}
            style={styles.buttonWrapper}
            onPress={btn.onClick}
            activeOpacity={0.6}
          >
            {btn.icon}
            <Text style={styles.buttonText}>{btn.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  );
};

export default ProfileScreen;
