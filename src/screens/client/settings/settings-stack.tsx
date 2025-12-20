import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsMain from "./settings-main/settings";
import Receipts from "./receipts/receipts";
import SavedAddresses from "./saved-addresses/saved-addresses";
import PaymentMethod from "./payment-method/payment-method";

export type SettingsStackParamList = {
  SettingsMain: undefined;
  Receipts: undefined;
  SavedAddresses: undefined;
  PaymentMethod: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsMain} />
      <Stack.Screen name="Receipts" component={Receipts} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    </Stack.Navigator>
  );
}
