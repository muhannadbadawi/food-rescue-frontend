import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsMain from "./settings-main/settings";
import Receipts from "./receipts/receipts";
import SavedAddresses from "./saved-addresses/saved-addresses";
import PaymentMethod from "./payment-method/payment-method";
import LanguageScreen from "./language-screen/language-screen";
import ThemeScreen from "./theme-screen/theme-screen";
import Profile from "./profile/profile";
import Country from "./country/country";
import Details from "./saved-addresses/details/details";
import { SavedAddress } from "@/src/constants/types";

export type ClientSettingsStackParamList = {
  SettingsMain: undefined;
  Profile: undefined;
  Receipts: undefined;
  SavedAddresses: undefined;
  Details: { address?: SavedAddress };
  PaymentMethod: undefined;
  LanguageScreen: undefined;
  ThemeScreen: undefined;
  Country: undefined;
};

const Stack = createNativeStackNavigator<ClientSettingsStackParamList>();

export default function ClientSettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsMain} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Receipts" component={Receipts} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
}
