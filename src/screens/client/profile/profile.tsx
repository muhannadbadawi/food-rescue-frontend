import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "@/src/shared/avatar/avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, useThemeController } from "@/src/theme/theme-context";
import { getStyles } from "./profile.styles";
import { RootStackParamList } from "@/App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useTranslation } from "react-i18next"; 
import i18n, { changeLanguage } from "@/src/localization/i18n"; 

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Layout">;

const ProfileScreen = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { theme, setTheme } = useThemeController();
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation(); 

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    changeLanguage(nextLang);
  };

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme); 
  };

  const logout = () => {
    navigation.navigate("Login");
  };

  const buttons = [
    {
      id: 0,
      title: t("profile.savedAddresses"),
      icon: "location-outline",
      onClick: () => {},
    },
    {
      id: 1,
      title: t("profile.country"),
      icon: "globe-outline",
      onClick: () => {},
    },
    {
      id: 2,
      title: t("profile.theme"),
      icon: "color-palette-outline",
      onClick: () => changeTheme(),
    },
    {
      id: 3,
      title: t("profile.language"),
      icon: "language-outline",
      onClick: () => toggleLanguage(), 
    },
    {
      id: 4,
      title: t("profile.logout"),
      icon: "log-out-outline",
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
          <Ionicons name={btn.icon as any} size={24} style={styles.icon} />
          <Text style={styles.buttonText}>{btn.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default ProfileScreen;
