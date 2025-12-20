import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileMain from "./profile-main/profile";
import Receipts from "./receipts/receipts";
import SavedAddresses from "./saved-addresses/saved-addresses";
import PaymentMethod from "./payment-method/payment-method";

export type ProfileStackParamList = {
  ProfileMain: undefined;
  Receipts: undefined;
  SavedAddresses: undefined;
  PaymentMethod: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileMain} />
      <Stack.Screen name="Receipts" component={Receipts} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    </Stack.Navigator>
  );
}
