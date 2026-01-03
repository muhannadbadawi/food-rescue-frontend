import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/src/theme/theme-context";

// Screens
// import MerchantOrders from "@/src/screens/merchant/orders/orders";
// import MerchantProducts from "@/src/screens/merchant/products/products";
// import MerchantAnalytics from "@/src/screens/merchant/analytics/analytics";
import SettingsNavigator from "@/src/screens/app/shared/screens/settings/settings-navigator";

type MerchantTabParamList = {
  Home: undefined;
  Orders: undefined;
  Products: undefined;
  Analytics: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MerchantTabParamList>();

export default function MerchantStack() {
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
        name="Home"
        component={() => {
          return <></>;
        }}
        options={{
          tabBarLabel: t("tabs.home"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={() => {
          return <></>;
        }}
        options={{
          tabBarLabel: t("tabs.home"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={() => {
          return <></>;
        }}
        options={{
          tabBarLabel: t("tabs.analytics"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: t("tabs.home"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Orders"
        component={MerchantOrders}
        options={{
          tabBarLabel: t("tabs.orders"),
          tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={MerchantProducts}
        options={{
          tabBarLabel: t("tabs.products"),
          tabBarIcon: ({ color, size }) => <Ionicons name="cube-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={MerchantAnalytics}
        options={{
          tabBarLabel: t("tabs.analytics"),
          tabBarIcon: ({ color, size }) => <Ionicons name="bar-chart-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: t("tabs.settings"),
          tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
