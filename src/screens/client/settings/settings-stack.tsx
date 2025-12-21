import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsMain from "./settings-main/settings";
import Receipts from "./receipts/receipts";
import SavedAddresses from "./saved-addresses/saved-addresses";
import PaymentMethod from "./payment-method/payment-method";
import LanguageScreen from "./language-screen/language-screen";
import ThemeScreen from "./theme-screen/theme-screen";
import Profile from "./profile/profile";

export type SettingsStackParamList = {
  SettingsMain: undefined;
  Profile: undefined;
  Receipts: undefined;
  SavedAddresses: undefined;
  PaymentMethod: undefined;
  LanguageScreen: undefined;
  ThemeScreen: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsMain} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Receipts" component={Receipts} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
}
