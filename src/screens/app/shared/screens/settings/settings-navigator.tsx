import React from "react";
import { useAuth } from "@/src/screens/auth/auth-context";
import ClientSettingsStack from "./client-settings-stack";
import MerchantSettingsStack from "./merchant-settings-stack";

export default function SettingsNavigator() {
  const { userRole } = useAuth();

  return userRole === "merchant" ? <MerchantSettingsStack /> : <ClientSettingsStack />;
}
