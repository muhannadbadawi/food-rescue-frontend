import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Avatar from "@/src/shared/avatar/avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, useThemeController } from "@/src/theme/theme-context";
import { getStyles } from "./profile.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "@/src/localization/i18n";
import { ProfileStackParamList } from "../profile-stack";
import { AppScreens } from "@/src/navigation/app-screens";
import { ProfileScreens } from "@/src/navigation/profile-screens";
import { useAuth } from "@/src/screens/auth/auth-context";

type LocalNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  "ProfileMain"
>;

const ProfileScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { theme, setTheme } = useThemeController();
  const localNavigation = useNavigation<LocalNavigationProp>();
  const { setIsLoggedIn } = useAuth();
  const { t } = useTranslation();

  const goToReceipts = () => {
    localNavigation.navigate(ProfileScreens.Receipts);
  };

  const goToPaymentMethod = () => {
    localNavigation.navigate(ProfileScreens.PaymentMethod);
  };
  const goToSavedAddresses = () => {
    localNavigation.navigate(ProfileScreens.SavedAddresses);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    changeLanguage(nextLang);
  };

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const buttons = [
    {
      id: 0,
      title: t("profile.receipts"),
      icon: <Ionicons name={"documents-sharp"} size={24} style={styles.icon} />,
      onClick: () => {
        goToReceipts();
      },
    },
    {
      id: 1,
      title: t("profile.paymentMethod"),
      icon: <MaterialIcons name="payment" size={24} style={styles.icon} />,
      onClick: () => {
        goToPaymentMethod();
      },
    },
    {
      id: 2,
      title: t("profile.savedAddresses"),
      icon: (
        <Ionicons name={"location-outline"} size={24} style={styles.icon} />
      ),
      onClick: () => {
        goToSavedAddresses();
      },
    },
    {
      id: 3,
      title: t("profile.country"),
      icon: <Ionicons name={"globe-outline"} size={24} style={styles.icon} />,
      onClick: () => {},
    },
    {
      id: 4,
      title: t("profile.theme"),
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
      title: t("profile.language"),
      icon: (
        <Ionicons name={"language-outline"} size={24} style={styles.icon} />
      ),
      onClick: () => toggleLanguage(),
    },
    {
      id: 6,
      title: t("profile.logout"),
      icon: <Ionicons name={"log-out-outline"} size={24} style={styles.icon} />,
      onClick: () => logout(),
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
