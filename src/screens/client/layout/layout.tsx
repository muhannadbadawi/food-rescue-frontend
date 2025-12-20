import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../explore/explore";
import { useTheme } from "@/src/theme/theme-context";
import ProfileStack from "../profile/profile-stack";

type RootTabParamList = {
  Explore: undefined;
  Favorites: undefined;
  Orders: undefined;
  Profile: undefined;
  Earn: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const DummyScreen = ({ label }: { label: string }) => (
  <Text style={{ flex: 1, textAlign: "center", marginTop: 50 }}>{label}</Text>
);

export default function Layout() {
  const colors = useTheme();
  
  const tabScreens = (
    <>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={() => <DummyScreen label="Favorites" />}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={() => <DummyScreen label="Orders" />}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Earn"
        component={() => <DummyScreen label="Earn" />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />
    </>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: true,
        tabBarBackground: () => (
          <Text style={{ flex: 1, backgroundColor: colors.background }} />
        ),
      }}
      children={tabScreens}
    />
  );
}
