import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/src/theme/theme-context";

// Screens
import Explore from "@/src/screens/client/explore/explore";
import Favorites from "@/src/screens/client/favorites/favorites";
import Orders from "@/src/screens/client/orders/orders";
import Earn from "@/src/screens/client/earn/earn";
import SettingsStack from "../../screens/client/settings/settings-stack";

type ClientTabParamList = {
  Explore: undefined;
  Favorites: undefined;
  Orders: undefined;
  Earn: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<ClientTabParamList>();

export default function ClientStack() {
  const colors = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarBackground: () => <View style={{ flex: 1, backgroundColor: colors.background }} />,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: t("tabs.explore"),
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: t("tabs.favorites"),
          tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: t("tabs.orders"),
          tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Earn"
        component={Earn}
        options={{
          tabBarLabel: t("tabs.earn"),
          tabBarIcon: ({ color, size }) => <Ionicons name="cash-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: t("tabs.settings"),
          tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
