import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Avatar from "@/src/shared/avatar/avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, useThemeController } from "@/src/theme/theme-context";
import { getStyles } from "./settings.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "@/src/localization/i18n";
import { SettingsStackParamList } from "../settings-stack";
import { useAuth } from "@/src/screens/auth/auth-context";
import { SettingScreens } from "@/src/navigation/setting-screens";

type LocalNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "SettingsMain"
>;

const ProfileScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { theme, setTheme } = useThemeController();
  const localNavigation = useNavigation<LocalNavigationProp>();
  const { logout } = useAuth();
  const { t } = useTranslation();

  const goToReceipts = () => {
    localNavigation.navigate(SettingScreens.Receipts);
  };

  const goToPaymentMethod = () => {
    localNavigation.navigate(SettingScreens.PaymentMethod);
  };
  const goToSavedAddresses = () => {
    localNavigation.navigate(SettingScreens.SavedAddresses);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    changeLanguage(nextLang);
  };

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
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
      onClick: () => {},
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
      onClick: () => changeTheme(),
    },
    {
      id: 5,
      title: t("settings.language"),
      icon: (
        <Ionicons name={"language-outline"} size={24} style={styles.icon} />
      ),
      onClick: () => toggleLanguage(),
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
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Avatar name="John Doe" />
          <Text style={styles.avatarName}>John Doe</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="pencil-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
};

export default ProfileScreen;
