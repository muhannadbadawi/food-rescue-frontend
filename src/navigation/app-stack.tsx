import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/theme-context";

import Explore from "@/src/screens/client/explore/explore";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import SettingsStack from "../screens/client/settings/settings-stack";

type AppTabParamList = {
  Explore: undefined;
  Favorites: undefined;
  Orders: undefined;
  Earn: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

const Dummy = ({ label }: { label: string }) => (
  <Text style={{ marginTop: 50, textAlign: "center" }}>{label}</Text>
);

export default function AppStack() {
  const colors = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: colors.background }} />
        ),
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: t("tabs.explore"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={() => <Dummy label="Favorites" />}
        options={{
          tabBarLabel: t("tabs.favorites"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={() => <Dummy label="Orders" />}
        options={{
          tabBarLabel: t("tabs.orders"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Earn"
        component={() => <Dummy label="Earn" />}
        options={{
          tabBarLabel: t("tabs.earn"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={SettingsStack}
        options={{
          tabBarLabel: t("tabs.settings"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
