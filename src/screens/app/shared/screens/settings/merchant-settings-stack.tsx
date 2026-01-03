import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsMain from "./settings-main/settings";
import LanguageScreen from "./language-screen/language-screen";
import ThemeScreen from "./theme-screen/theme-screen";
import Profile from "./profile/profile";
import { SettingsStackParamList } from "./settings-stack-param";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function MerchantSettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsMain} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
}
